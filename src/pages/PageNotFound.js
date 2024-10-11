import React from "react";
import { Box } from "@mui/material";
import page from "../assets/images/page_not_found.jpg";
const PageNotFound = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box textAlign="center">
        <img src={page} alt="404 Error" width={500} height={500} />
      </Box>
    </Box>
  );
};

export default PageNotFound;
