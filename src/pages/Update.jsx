import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { getApi, putApi } from "../services/apiClient";
import { Autocomplete, Box, Button, Grid, TextField } from "@mui/material";
import DetailNotice from "../components/detail/DetailNotice";
import moment from "moment";
import { Editor } from "@toast-ui/react-editor";

const Update = () => {
  // 글 번호
  const { id } = useParams();

  const editorRef = useRef();
  // 글 본문
  const [taxidermy, setTaxidermy] = useState({
    id: 0,
    nickname: "",
    dungeonType: "",
    title: "",
    content: "",
    createdAt: "",
    character: { classType: "", name: "", serverType: "" },
  });

  const [editDungeon, setEditDungeon] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const editTitleChangeHandler = (e) => {
    setEditTitle(e.target.value);
  };

  const setEditField = (taxidermy) => {
    setEditDungeon(taxidermy.dungeonType);
    setEditTitle(taxidermy.title);
  };

  // use
  const nav = useNavigate();
  const location = useLocation();

  // 비밀번호 입력창
  const [password, setPassword] = useState("");

  const onClickHandler = () => {
    if (validCheck()) {
      putTaxidermy();
    }
  };

  // api
  const getTaxidermy = async () => {
    const response = await getApi(`/api/v1/taxidermy/${id}`);

    if (response.data.code === "NOT_FOUND") {
      alert(response.data.message);
      nav("/");
    }
    setTaxidermy(response.data);
    setEditField(response.data);
  };

  const putTaxidermy = async () => {
    const editorInstance = editorRef.current.getInstance();
    const content = editorInstance.getMarkdown();
    const response = await putApi(`/api/v1/taxidermy/${id}`, {
      title: editTitle,
      content: content,
      dungeon: editDungeon,
      password: password,
    });

    if (response.data !== "") {
      alert(response.data.message);
      return;
    }
    nav(-1);
  };

  useEffect(() => {
    if (location.state) {
      setPassword(location.state.password);
    } else {
      nav("/");
    }
  }, [location]);

  useEffect(() => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      editorInstance.setMarkdown(taxidermy.content);
    }
  }, [taxidermy.content]);

  useEffect(() => {
    getTaxidermy();
  }, []);
  const validCheck = () => {
    if (editTitle === "") {
      alert("제목을 작성해주세요.");
      return false;
    }
    if (editTitle.length > 70) {
      alert("제목은 70자 이하여야 합니다.");
      return false;
    }
    if (editDungeon === "") {
      alert("레이드를 선택해주세요.");
      return false;
    }
    return true;
  };

  return (
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
          <DetailNotice />
        </Grid>
        <Grid item md={2} xs={12}>
          <Autocomplete
            fullWidth
            disablePortal
            id="dungeon"
            options={dungeons}
            value={editDungeon}
            onChange={(event, newValue) => {
              setEditDungeon(newValue);
            }}
            renderInput={(params) => <TextField {...params} label="레이드" />}
          />
        </Grid>
        <Grid item md={10} xs={12}>
          <TextField
            id="title"
            label="제목"
            variant="outlined"
            multiline
            fullWidth
            value={editTitle}
            onChange={editTitleChangeHandler}
          />
        </Grid>
        <Grid item md={2} xs={6}>
          <TextField
            id="server"
            label="서버"
            variant="outlined"
            disabled
            fullWidth
            value={taxidermy.character.serverType}
          />
        </Grid>
        <Grid item md={2} xs={6}>
          <TextField
            id="class"
            label="직업"
            variant="outlined"
            disabled
            fullWidth
            value={taxidermy.character.classType}
          />
        </Grid>

        <Grid item md={3} xs={12}>
          <TextField
            id="nickname"
            label="숙코 닉네임"
            variant="outlined"
            fullWidth
            value={taxidermy.character.name}
            disabled
          />
        </Grid>
        <Grid item md={2} xs={12}>
          <TextField
            id="createdAt"
            label="작성일"
            variant="outlined"
            disabled
            fullWidth
            value={moment(taxidermy.createdAt).format("YYYY-MM-DD HH:mm")}
          />
        </Grid>
        <Grid item md={1.5} xs={6}>
          <Button
            sx={{ height: "100%", width: "100%" }}
            variant="outlined"
            onClick={onClickHandler}
          >
            수정
          </Button>
        </Grid>
        <Grid item md={1.5} xs={6}>
          <Link to={-1}>
            <Button sx={{ height: "100%", width: "100%" }} variant="outlined">
              뒤로가기
            </Button>
          </Link>
        </Grid>
        <Grid item md={12} xs={12}>
          <Editor
            previewStyle="vertical"
            viewer={true}
            height="1000px"
            initialEditType="wysiwyg"
            initialValue={taxidermy.content}
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
          ></Editor>
        </Grid>
      </Grid>
    </Box>
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

export default Update;
