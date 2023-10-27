import React from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const QuickSearchBar = ({ nickname, onChangHandler, onClickHandler }) => {
  const onKeyPressHandler = (event) => {
    if (event.key === "Enter") {
      onClickHandler();
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          flexDirection: "column",
        }}
      >
        <Grid container spacing={2} sx={{ maxWidth: "500px" }} mt={"20px"}>
          <Grid item md={11} xs={12}>
            <TextField
              id="nickname"
              value={nickname}
              label="닉네임"
              variant="outlined"
              fullWidth
              onChange={onChangHandler}
              onKeyUp={onKeyPressHandler}
            />
          </Grid>
          <Grid item md={1} xs={12}>
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
