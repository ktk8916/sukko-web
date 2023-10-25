import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import GridViewIcon from "@mui/icons-material/GridView";
import EditIcon from "@mui/icons-material/Edit";

const MyHeader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Lostark Sukko</Link>
          </Typography>
          <Link to="/">
            <Button color="inherit" startIcon={<SearchIcon color="inherit" />}>
              빠른검색
            </Button>
          </Link>
          {/*<Link to="/museum">*/}
          {/*  <Button*/}
          {/*    color="inherit"*/}
          {/*    startIcon={<GridViewIcon color="inherit" />}*/}
          {/*  >*/}
          {/*    목록보기*/}
          {/*  </Button>*/}
          {/*</Link>*/}
          <Link to="/write">
            <Button color="inherit" startIcon={<EditIcon color="inherit" />}>
              등록
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MyHeader;
