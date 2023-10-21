import React from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const QuickSearchBar = ({ nickname, onChangHandler, onClickHandler }) => {
  return (
    <>
      <Box
        sx={{
          height: "360px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2} sx={{ width: "70%" }}>
          <Grid item md={11} xs={11}>
            <TextField
              id="nickname"
              value={nickname}
              label="닉네임"
              variant="outlined"
              fullWidth
              onChange={onChangHandler}
            />
          </Grid>
          <Grid item md={1} xs={1}>
            <Button
              variant="outlined"
              sx={{ height: "100%" }}
              fullWidth
              onClick={onClickHandler}
            >
              <SearchIcon />
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default QuickSearchBar;
