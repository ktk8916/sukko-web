import React, { useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Snackbar,
  TextField,
} from "@mui/material";
import WriteNotice from "../components/write/WriteNotice";
import { Link, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { getApi, postApi } from "../services/apiClient";

const Write = () => {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [dungeon, setDungeon] = useState("");
  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const nav = useNavigate();

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentChangeHandler = (e) => {
    setContent(e.target.value);
  };

  const nicknameChangeHandler = (e) => {
    setNickname(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const postClickHandler = () => {
    postTaxidermy();
  };

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const postTaxidermy = async () => {
    try {
      const response = await postApi(`/api/v1/taxidermy`, {
        title,
        nickname,
        content,
        password,
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
            <FormControl variant="outlined">
              <InputLabel htmlFor="password">비밀번호</InputLabel>
              <OutlinedInput
                id="password"
                value={password}
                onChange={passwordChangeHandler}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Grid>
          <Grid item md={1} xs={2}>
            <Button
              sx={{ height: "100%" }}
              variant="contained"
              onClick={postClickHandler}
            >
              완료
            </Button>
          </Grid>
          <Grid item md={1} xs={2}>
            <Link to="/">
              <Button sx={{ height: "100%" }} variant="outlined">
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