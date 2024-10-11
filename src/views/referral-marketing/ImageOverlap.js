import React from 'react'
import { styled } from "@mui/system";
import {
  Box,
  Typography,
} from "@mui/material";
const OverlayBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(3),
  background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)",
}));
const ImageOverlap = ({
  category,
  mainImage,
  mainTitle,
  mainSubtitle,
}) => {
  return (
    <Box position="relative" width="100%">
      <Box
        component="img"
        src={mainImage}
        alt={category}
        width="100%"
        sx={{ borderRadius: "4px" }}
      />
      <OverlayBox
        sx={{ display: { xs: "none", sm: "flex" }, flexDirection: "column" }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontSize: { xs: "28px", md: "36px", lg: "46px" }, color:"white", fontWeight:"bold",marginLeft:"15px",fontFamily:"Neunhaas_e"
          }}
        >
          {mainTitle}
        </Typography>
        <Typography
          variant="subtitle1"
          color="white"
          marginLeft={"15px"}
          fontSize={"20px"}
          marginBottom={"15px"}
          sx={{ display: { xs: "none", md: "flex" } }}
          fontFamily={"Neunhaas_d"}
        >
          {mainSubtitle}
        </Typography>
      </OverlayBox>
    </Box>
  );
};

export default ImageOverlap
