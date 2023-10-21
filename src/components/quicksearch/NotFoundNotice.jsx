import React from "react";
import { Paper, Typography } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const NotFoundNotice = ({ searchNickname }) => {
  return (
    <Paper
      sx={{
        height: "420px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <ThumbUpIcon fontSize="large" />
      <Typography variant="h6" gutterBottom>
        {`${searchNickname} 검색 결과가 없습니다.`}
      </Typography>
    </Paper>
  );
};

export default NotFoundNotice;
