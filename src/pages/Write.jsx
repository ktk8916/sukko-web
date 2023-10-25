import React, { useState } from "react";
import { Autocomplete, Box, Button, Grid, TextField } from "@mui/material";
import WriteNotice from "../components/write/WriteNotice";
import { Link, useNavigate } from "react-router-dom";
import { postApi } from "../services/apiClient";
import { v4 as uuidv4 } from "uuid";
import PasswordInput from "../components/common/PasswordInput";

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
  const [content, setContent] = useState("");
  const contentChangeHandler = (e) => {
    setContent(e.target.value);
  };
  const [dungeon, setDungeon] = useState("");

  // nav
  const nav = useNavigate();

  // 비밀번호 입력창
  const [password, setPassword] = useState("");

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  // api
  const postClickHandler = () => {
    postTaxidermy();
  };
  const postTaxidermy = async () => {
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
  const validCheck = () => {};
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
            <TextField
              id="content"
              label="내용"
              multiline
              rows={12}
              value={content}
              onChange={contentChangeHandler}
              fullWidth
            />
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
