import React from "react";
import { Pagination, Box } from "@mui/material";

const CustomPagination = ({ totalPages, page, onChange }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 4,
        mb: 10,
        px: 2,
      }}
    >
      <Pagination
        count={totalPages}
        page={page}
        onChange={onChange}
        siblingCount={2}
        boundaryCount={1}
        sx={{
          "& .MuiPagination-ul": {
            justifyContent: "center",
            flexWrap: "wrap",
          },
          ".MuiPaginationItem-root": {
            fontSize: { xs: "0.75rem", sm: "0.875rem" },
            padding: { xs: "6px", sm: "8px" },
          },
          ".Mui-selected": {
            bgcolor: "#F7F4F1",
          },
        }}
      />
    </Box>
  );
};

export default CustomPagination;
