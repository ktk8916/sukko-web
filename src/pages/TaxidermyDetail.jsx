import React, { useEffect, useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getApi } from "../services/apiClient";
import moment from "moment/moment";
import DetailNotice from "../components/detail/DetailNotice";

const TaxidermyDetail = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [taxidermy, setTaxidermy] = useState({
    id: 0,
    nickname: "",
    dungeonType: "",
    title: "",
    content: "",
    createdAt: "",
    character: { classType: "", name: "", serverType: "" },
  });
  const getTaxidermy = async () => {
    const response = await getApi(`/api/v1/taxidermy/${id}`);

    if (response.data.code === "NOT_FOUND") {
      alert(response.data.message);
      nav("/");
    }
    console.log(response.data);
    setTaxidermy(response.data);
  };

  useEffect(() => {
    getTaxidermy();
  }, []);

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
            <DetailNotice />
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              id="title"
              label="제목"
              variant="outlined"
              disabled
              fullWidth
              value={taxidermy.title}
            />
          </Grid>
          <Grid item md={6} xs={6}>
            <TextField
              id="dungeon"
              label="레이드"
              variant="outlined"
              disabled
              fullWidth
              value={taxidermy.dungeonType}
            />
          </Grid>
          <Grid item md={6} xs={6}>
            <TextField
              id="server"
              label="서버"
              variant="outlined"
              disabled
              fullWidth
              value={taxidermy.character.serverType}
            />
          </Grid>
          <Grid item md={3} xs={6}>
            <TextField
              id="class"
              label="직업"
              variant="outlined"
              disabled
              fullWidth
              value={taxidermy.character.classType}
            />
          </Grid>

          <Grid item md={5} xs={6}>
            <TextField
              id="nickname"
              label="숙코 닉네임"
              variant="outlined"
              fullWidth
              value={taxidermy.character.name}
              disabled
            />
          </Grid>
          <Grid item md={3} xs={8}>
            <TextField
              id="createdAt"
              label="작성일"
              variant="outlined"
              disabled
              fullWidth
              value={moment(taxidermy.createdAt).format("YYYY-MM-DD HH:mm")}
            />
          </Grid>
          <Grid item md={1} xs={2}>
            <Link to="/">
              <Button sx={{ height: "100%" }} variant="outlined">
                뒤로가기
              </Button>
            </Link>
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              id="content"
              label="내용"
              disabled
              multiline
              rows={12}
              value={taxidermy.content}
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TaxidermyDetail;
