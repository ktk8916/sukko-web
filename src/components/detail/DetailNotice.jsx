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
      <Typography variant="h6" gutterBottom>
        <CancelIcon />
        삭제 요청은 오픈카톡으로 문의주세요.
      </Typography>
      <Typography variant="h6" gutterBottom>
        https://open.kakao.com/o/sEqg10Of
      </Typography>
    </Paper>
  );
};

export default DetailNotice;
