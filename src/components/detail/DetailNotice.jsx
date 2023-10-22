import React from "react";
import { Paper, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

const DetailNotice = () => {
  return (
    <Paper
      sx={{
        height: "360px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/*<Typography variant="h6" gutterBottom>*/}
      {/*  <CameraAltIcon />*/}
      {/*  증거사진 첨부를 원칙으로 합니다.*/}
      {/*</Typography>*/}
      <Typography variant="h6" gutterBottom>
        <CancelIcon />
        삭제 요청은 DM 보내주세요.
      </Typography>
    </Paper>
  );
};

export default DetailNotice;
