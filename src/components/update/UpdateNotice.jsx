import React from "react";
import { Paper, Typography } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import EditIcon from "@mui/icons-material/Edit";
import KeyIcon from "@mui/icons-material/Key";
import LockIcon from "@mui/icons-material/Lock";
import DeleteIcon from "@mui/icons-material/Delete";

const UpdateNotice = () => {
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
        수정중..
      </Typography>
    </Paper>
  );
};

export default UpdateNotice;
