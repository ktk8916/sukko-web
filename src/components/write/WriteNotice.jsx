import React from "react";
import { Paper, Typography } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CancelIcon from "@mui/icons-material/Cancel";
import PasswordIcon from "@mui/icons-material/Password";

const WriteNotice = () => {
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
        <CameraAltIcon />
        증거사진 첨부를 원칙으로 합니다.
      </Typography>
      <Typography variant="h6" gutterBottom>
        <CancelIcon />
        근거가 없는 글은 임의로 삭제될 수 있습니다.
      </Typography>
      <Typography variant="h6" gutterBottom>
        <PasswordIcon />
        간단한 비밀번호는 타인이 유추하기 쉽습니다.
      </Typography>
    </Paper>
  );
};

export default WriteNotice;
