import React, { useState } from "react";
import QuickSearchBar from "../components/quicksearch/QuickSearchBar";
import QuickSearchContainer from "../components/quicksearch/QuickSearchContainer";
import { getApi } from "../services/apiClient";
import { validNameRegexPattern } from "../util/regex";
import { Box, Grid, Snackbar } from "@mui/material";
import SearchNotice from "../components/quicksearch/SearchNotice";

const QuickSearch = () => {
  const [nickname, setNickname] = useState("");
  const [searchNickname, setSearchNickname] = useState("");
  const [taxidermys, setTaxidermys] = useState([]);
  const [relationTaxidermys, setRelationTaxidermys] = useState([]);
  const [open, setOpen] = React.useState(false);
  const onChangeHandler = (e) => {
    setNickname(e.target.value);
  };

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const onClickHandler = () => {
    if (!validNameRegexPattern.test(nickname)) {
      handleClick();
      return;
    }

    setSearchNickname(nickname);
    getRelationTaxidermys(nickname);
    getTaxidermys(nickname);
  };

  const getTaxidermys = async (nickname) => {
    try {
      const response = await getApi(`/api/v1/taxidermy?name=${nickname}`);
      setTaxidermys(response.data);
    } catch (err) {}
  };

  const getRelationTaxidermys = async (nickname) => {
    try {
      const response = await getApi(
        `/api/v1/taxidermy/relation?name=${nickname}`,
      );
      setRelationTaxidermys(response.data);
    } catch (err) {}
  };
  return (
    <Box
      sx={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container sx={{ maxWidth: "1400px" }} spacing={2}>
        <Grid item md={12} xs={12}>
          <SearchNotice />
        </Grid>
        <Grid item md={12} xs={12}>
          <QuickSearchBar
            nickname={nickname}
            onChangHandler={onChangeHandler}
            onClickHandler={onClickHandler}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <QuickSearchContainer
            searchNickname={searchNickname}
            taxidermys={taxidermys}
            relationTaxidermys={relationTaxidermys}
          />
        </Grid>
        <Snackbar
          open={open}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          autoHideDuration={5000}
          onClose={handleClose}
          message={`'${nickname}' 입력을 확인하세요.`}
        />
      </Grid>
    </Box>
  );
};

export default QuickSearch;
