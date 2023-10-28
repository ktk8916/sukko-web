import React, { useRef, useState } from "react";
import { Autocomplete, Box, Button, Grid, TextField } from "@mui/material";
import WriteNotice from "../components/write/WriteNotice";
import { Link, useNavigate } from "react-router-dom";
import { postApi } from "../services/apiClient";
import { v4 as uuidv4 } from "uuid";
import PasswordInput from "../components/common/PasswordInput";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
const Write = () => {
  // 작성 내용
  const [title, setTitle] = useState("");
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const [nickname, setNickname] = useState("");
  const nicknameChangeHandler = (e) => {
    setNickname(e.target.value);
  };

  const [dungeon, setDungeon] = useState("");

  // nav
  const nav = useNavigate();
  const editorRef = useRef();

  // 비밀번호 입력창
  const [password, setPassword] = useState("");

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  // api
  const postClickHandler = () => {
    if (validCheck()) {
      postTaxidermy();
    }
  };
  const postTaxidermy = async () => {
    const editorInstance = editorRef.current.getInstance();
    const content = editorInstance.getMarkdown();
    try {
      const response = await postApi(`/api/v1/taxidermy`, {
        title,
        nickname,
        content,
        password: password === "" ? uuidv4() : password,
        dungeon,
      });
      if (response.data.code !== "BAD_REQUEST") {
        nav("/");
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      alert("");
      nav("/");
    }
  };
  const validCheck = () => {
    if (title === "") {
      alert("제목을 작성해주세요.");
      return false;
    }
    if (title.length > 70) {
      alert("제목은 70자 이하여야 합니다.");
      return false;
    }
    if (dungeon === "") {
      alert("레이드를 선택해주세요.");
      return false;
    }
    if (nickname === "") {
      alert("닉네임을 입력해주세요.");
      return false;
    }

    return true;
  };

  const storage = getStorage();
  const onUploadImage = async (blob, callback) => {
    const today = new Date();
    try {
      const storageRef = ref(
        storage,
        `images/${today.getFullYear()}-${
          today.getMonth() + 1
        }-${today.getDate()}/${uuidv4()}`,
      );

      await uploadBytes(storageRef, blob);
      const imageUrl = await getDownloadURL(storageRef);
      callback(imageUrl, "image");
    } catch (error) {
      console.error("Image upload error:", error);
    }
  };
  return (
    <>
      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container sx={{ maxWidth: "1400px" }} spacing={2}>
          <Grid item md={12} xs={12}>
            <WriteNotice />
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              id="title"
              label="제목"
              variant="outlined"
              fullWidth
              value={title}
              onChange={titleChangeHandler}
            />
          </Grid>
          <Grid item md={4} xs={6}>
            <Autocomplete
              fullWidth
              disablePortal
              id="dungeon"
              options={dungeons}
              value={dungeon}
              onChange={(event, newValue) => {
                setDungeon(newValue);
              }}
              renderInput={(params) => <TextField {...params} label="레이드" />}
            />
          </Grid>

          <Grid item md={4} xs={6}>
            <TextField
              id="nickname"
              label="숙코 닉네임"
              variant="outlined"
              fullWidth
              value={nickname}
              onChange={nicknameChangeHandler}
            />
          </Grid>
          <Grid item md={2} xs={8}>
            <PasswordInput
              password={password}
              passwordChangeHandler={passwordChangeHandler}
            />
          </Grid>
          <Grid item md={1} xs={2}>
            <Button
              sx={{ height: "100%", width: "100%" }}
              variant="contained"
              onClick={postClickHandler}
            >
              작성
            </Button>
          </Grid>
          <Grid item md={1} xs={2}>
            <Link to="/">
              <Button sx={{ height: "100%", width: "100%" }} variant="outlined">
                취소
              </Button>
            </Link>
          </Grid>
          <Grid item md={12} xs={12}>
            <Editor
              previewStyle="vertical"
              viewer={true}
              height="1000px"
              initialEditType="wysiwyg"
              usageStatistics={false}
              hideModeSwitch={true}
              toolbarItems={[
                // 툴바 옵션 설정
                ["heading", "bold", "italic", "strike"],
                ["hr", "quote"],
                ["ul", "ol", "task", "indent", "outdent"],
                ["image"],
              ]}
              ref={editorRef}
              hooks={{
                addImageBlobHook: onUploadImage,
              }}
            ></Editor>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

const dungeons = [
  "발탄",
  "비아키스",
  "쿠크세이튼",
  "아브렐슈드",
  "일리아칸",
  "카멘",
  "카양겔",
  "상아탑",
];
export default Write;
