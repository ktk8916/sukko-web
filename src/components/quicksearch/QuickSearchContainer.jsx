import React from "react";
import { Box, Chip, Grid, Paper, Typography } from "@mui/material";
import SummaryCard from "./SummaryCard";
import NotFoundNotice from "./NotFoundNotice";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
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
      <Grid container sx={{ maxWidth: "1400px" }} spacing={3}>
        <Grid item xs={12} md={6}>
          <Chip avatar={<PersonIcon />} label="캐릭터" variant="outlined" />

          {taxidermys.length === 0 && (
            <NotFoundNotice searchNickname={searchNickname} />
          )}
          {taxidermys.map((content, index) => (
            <SummaryCard key={index} content={content} />
          ))}
        </Grid>
        <Grid item xs={12} md={6}>
          <Chip
            avatar={<GroupsIcon />}
            label="원정대캐릭터"
            variant="outlined"
          />
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
