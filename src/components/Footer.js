import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Facebook, LinkedIn, YouTube } from "@mui/icons-material";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "white",
        marginTop: "48px",
        display: "flex",
        justifyContent: { xs: "center", sm: "space-between" },
        alignItems: "center",
        flexDirection: { xs: "column", sm: "row" },
        padding: { xs: "16px", sm: "24px" },
        gap: { xs: "16px", sm: "0px" },
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        gap={1}
        flexDirection={"column"}
        justifyContent={"center"}
        sx={{
          textAlign: { xs: "center", sm: "left" },
          alignItems: { xs: "center", sm: "flex-start" },
        }}
      >
        <img src={logo} alt="Viral Loops Logo" style={{ height: "30px" }} />
        <Typography variant="body2" color="textSecondary">
          © 2024 Viral Loops Technologies Inc.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-end" },
        }}
      >
        <IconButton
          href="https://www.facebook.com"
          target="_blank"
          aria-label="Facebook"
          sx={{ color: "black" }}
        >
          <Facebook />
        </IconButton>

        <IconButton
          href="https://www.x.com"
          target="_blank"
          aria-label="Twitter"
          sx={{ color: "black" }}
        >
          <FaXTwitter />
        </IconButton>

        <IconButton
          href="https://www.linkedin.com"
          target="_blank"
          aria-label="LinkedIn"
          sx={{ color: "black" }}
        >
          <LinkedIn />
        </IconButton>

        <IconButton
          href="https://www.youtube.com"
          target="_blank"
          aria-label="YouTube"
          sx={{ color: "black" }}
        >
          <YouTube />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
