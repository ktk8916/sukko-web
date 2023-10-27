import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteApi, getApi, postApi } from "../services/apiClient";
import moment from "moment/moment";
import DetailNotice from "../components/detail/DetailNotice";
import PasswordInput from "../components/common/PasswordInput";
import { Editor, Viewer } from "@toast-ui/react-editor";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const TaxidermyDetail = () => {
  // 글 번호
  const { id } = useParams();

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
  // use
  const nav = useNavigate();

  // 비밀번호 입력창
  const [password, setPassword] = useState("");

  // 비밀번호 모달
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  // 삭제 비밀번호 확인
  const [deleteOpen, setDeleteOpen] = useState(false);
  const openDeletePopup = () => {
    setDeleteOpen(true);
  };
  const closeDeletePopup = () => {
    setPassword("");
    setDeleteOpen(false);
  };

  const [editOpen, seteditOpen] = useState(false);
  const openEditPopup = () => {
    seteditOpen(true);
  };
  const closeEditPopup = () => {
    setPassword("");
    seteditOpen(false);
  };

  // api
  const getTaxidermy = async () => {
    const response = await getApi(`/api/v1/taxidermy/${id}`);

    if (response.data.code === "NOT_FOUND") {
      alert(response.data.message);
      nav("/");
    }
    setTaxidermy(response.data);
  };

  const deleteTaxidermy = async () => {
    const response = await deleteApi(`/api/v1/taxidermy/${id}`, { password });

    if (response.data !== "") {
      alert(response.data.message);
      closeDeletePopup();
      return;
    }
    nav("/");
  };

  const checkPassword = async () => {
    const response = await postApi(`/api/v1/taxidermy/${id}`, { password });

    if (response.data !== "") {
      alert(response.data.message);
      closeEditPopup();
      return;
    }

    nav(`/taxidermy/${id}/update`, { state: { password } });
  };

  useEffect(() => {
    getTaxidermy();
  }, []);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().on("focus", () => {
        editorRef.current.getInstance().blur();
      });
    }
  }, []);

  const editorRef = useRef();
  useEffect(() => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      editorInstance.setMarkdown(taxidermy.content);
    }
  }, [taxidermy.content]);

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
          <TextField
            id="dungeon"
            label="레이드"
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
            fullWidth
            value={taxidermy.dungeonType}
          />
        </Grid>
        <Grid item md={10} xs={12}>
          <TextField
            id="title"
            label="제목"
            variant="outlined"
            multiline
            InputProps={{
              readOnly: true,
            }}
            fullWidth
            value={taxidermy.title}
          />
        </Grid>
        <Grid item md={2} xs={6}>
          <TextField
            id="server"
            label="서버"
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
            fullWidth
            value={taxidermy.character.serverType}
          />
        </Grid>
        <Grid item md={2} xs={6}>
          <TextField
            id="class"
            label="직업"
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
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
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item md={2} xs={12}>
          <TextField
            id="createdAt"
            label="작성일"
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
            fullWidth
            value={moment(taxidermy.createdAt).format("YYYY-MM-DD HH:mm")}
          />
        </Grid>
        <Grid item md={1} xs={4}>
          <Button
            sx={{ height: "100%", width: "100%" }}
            variant="outlined"
            onClick={openEditPopup}
          >
            수정
          </Button>
        </Grid>
        <Grid item md={1} xs={4}>
          <Button
            sx={{ height: "100%", width: "100%" }}
            variant="outlined"
            onClick={openDeletePopup}
          >
            삭제
          </Button>
          <Dialog
            open={deleteOpen}
            onClose={closeDeletePopup}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"비밀번호 확인"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <PasswordInput
                  password={password}
                  passwordChangeHandler={passwordChangeHandler}
                  margin="normal"
                />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={deleteTaxidermy}>삭제</Button>
              <Button onClick={closeDeletePopup} autoFocus>
                취소
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={editOpen}
            onClose={closeEditPopup}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"비밀번호 확인"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <PasswordInput
                  password={password}
                  passwordChangeHandler={passwordChangeHandler}
                  margin="normal"
                />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={checkPassword}>수정</Button>
              <Button onClick={closeEditPopup} autoFocus>
                취소
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
        <Grid item md={1} xs={4}>
          <Link to="/">
            <Button sx={{ height: "100%", width: "100%" }} variant="outlined">
              뒤로가기
            </Button>
          </Link>
        </Grid>
        <Grid item md={12} xs={12}>
          <Editor
            previewStyle="vertical"
            height="auto"
            initialEditType="wysiwyg"
            initialValue={taxidermy.content}
            usageStatistics={false}
            hideModeSwitch={true}
            toolbarItems={[]}
            ref={editorRef}
          ></Editor>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TaxidermyDetail;
