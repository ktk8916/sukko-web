import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import SummaryCard from "./SummaryCard";
import NotFoundNotice from "./NotFoundNotice";

const QuickSearchContainer = ({
  searchNickname,
  taxidermys,
  relationTaxidermys,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container sx={{ width: "70%" }} spacing={3}>
        <Grid item xs={12} md={6}>
          {taxidermys.length === 0 && (
            <NotFoundNotice searchNickname={searchNickname} />
          )}
          {taxidermys.map((content, index) => (
            <SummaryCard key={index} content={content} />
          ))}
        </Grid>
        <Grid item xs={12} md={6}>
          {relationTaxidermys.length === 0 && (
            <NotFoundNotice searchNickname={searchNickname} />
          )}
          {relationTaxidermys.map((content, index) => (
            <SummaryCard key={index} content={content} />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default QuickSearchContainer;
