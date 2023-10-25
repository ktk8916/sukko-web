import React from "react";
import { Paper, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchNotice = () => {
  return (
    <Paper
      sx={{
        height: "320px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6" gutterBottom>
        <SearchIcon />
        최근 2주 동안의 숙코 내역을 검색하세요 !
      </Typography>
    </Paper>
  );
};

export default SearchNotice;
