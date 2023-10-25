import React from "react";
import { Paper, Typography } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import EditIcon from "@mui/icons-material/Edit";
import KeyIcon from "@mui/icons-material/Key";
import LockIcon from "@mui/icons-material/Lock";
import DeleteIcon from "@mui/icons-material/Delete";

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
        <EditIcon />
        글은 2주동안 게시되고 삭제됩니다.
      </Typography>
      <Typography variant="h6" gutterBottom>
        <CameraAltIcon />
        증거사진 첨부를 원칙으로 합니다.
      </Typography>
      <Typography variant="h6" gutterBottom>
        <DeleteIcon />
        근거가 없는 글은 임의로 삭제될 수 있습니다.
      </Typography>
      <Typography variant="h6" gutterBottom>
        <KeyIcon />
        간단한 비밀번호는 타인이 유추하기 쉽습니다.
      </Typography>
      <Typography variant="h6" gutterBottom>
        <LockIcon />
        비밀번호 미 기입시 수정, 삭제가 불가합니다.
      </Typography>
    </Paper>
  );
};

export default WriteNotice;
