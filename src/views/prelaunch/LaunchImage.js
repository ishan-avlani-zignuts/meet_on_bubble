import { Box } from '@mui/material';
import React from 'react'

const LaunchImage = ({ category, mainImage }) => {
  return (
    <Box
      component="img"
      src={mainImage}
      alt={category}
      width="100%"
      sx={{ borderRadius: "4px" }}
    />
  );
};

export default LaunchImage
