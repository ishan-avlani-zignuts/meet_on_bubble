import {
  Box,
  Button,
  Typography,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Modal,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { IoMdArrowDropright } from "react-icons/io";
const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
   const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useNavigate();

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };
   const toggleDrawer = (open) => (event) => {
     if (
       event.type === "keydown" &&
       (event.key === "Tab" || event.key === "Shift")
     ) {
       return;
     }
     setDrawerOpen(open);
   };
    const handleLinkClick = (url) => {
      navigate(url);
      setDrawerOpen(false);
    };

  const menuItems = [
    { name: "Referral Marketing", url: "/referral-marketing" },
    { name: "Prelaunch", url: "/prelaunch" },
    { name: "Newsletter Growth", url: "/newsletter-growth" },
    { name: "Case Studies", url: "/case-studies" },
    { name: "News & Updates", url: "/news-updates" },
    { name: "Books", url: "/books" },
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 0px",
          backgroundColor: "#fff",
          height: "80px",
        }}
      >
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{
              width: 250,
              backgroundColor: "#f5f5f5",
              height: "100%",
              padding: "16px",
            }}
            role="presentation"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
            >
              <Box display="flex" alignItems="center">
                <Box
                  component="img"
                  src={logo}
                  alt="Viral Loops Logo"
                  sx={{ width: 181, height: 40, marginRight: 1 }}
                />
              </Box>
              <IconButton onClick={toggleDrawer(false)}>
                <IoClose />
              </IconButton>
            </Box>
            <List>
              {menuItems.map((item, index) => (
                <ListItem
                  key={item.name}
                  sx={{
                    padding: "16px 0",
                    borderTop: "1px solid #e0e0e0",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                    position: "relative",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => handleLinkClick(item.url)}
                >
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{
                      sx: {
                        fontFamily: "Neunhaas_e",
                        fontWeight: "bolder",
                        color: hoveredItem === index ? "black" : "inherit",
                      },
                    }}
                  />
                  {hoveredItem === index && (
                    <IoMdArrowDropright
                      size={20}
                      style={{
                        position: "absolute",
                        right: 0,
                        color: "black",
                      }}
                    />
                  )}
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        <IconButton
          sx={{
            display: "none",
            "@media (max-width: 1020px)": {
              display: "block",
            },
          }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        <Box alignItems={"center"}>
          <img src={logo} alt="logo" style={{ height: "40px" }} />
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            "@media (max-width: 1020px)": {
              display: "none",
            },
            alignItems: "center",
          }}
        >
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.url}
              style={{ textDecoration: "none" }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Neunhaas_e",
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "14px",
                  marginRight: "12px",
                  marginLeft: "12px",
                  textAlign: "center",
                  alignItems: "center",
                  position: "relative",
                  "&:hover::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: "-2px",
                    height: "1px",
                    backgroundColor: "black",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: "-2px",
                    height: "1px",
                    backgroundColor: "transparent",
                    transition: "background-color 0.3s ease-in-out",
                  },
                }}
              >
                {item.name}
              </Typography>
            </Link>
          ))}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0055FF",
              color: "white",
              borderRadius: "5px",
              fontFamily: "Neunhaas_e",
              fontWeight: "bold",
              textTransform: "none",
              padding: "10px 20px",
              display: "flex",
              "@media (max-width: 1200px)": {
                display: "none",
              },
            }}
            onClick={() => navigate("/waitlist")}
          >
            Try for free
          </Button>
          <Button
            sx={{
              minWidth: "auto",
              padding: "10px",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
            onClick={toggleSearch}
          >
            <FaSearch style={{ color: "black", fontSize: "20px" }} />
          </Button>
        </Box>
      </Box>

      <Modal
        open={searchOpen}
        onClose={toggleSearch}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          marginTop: "80px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            padding: "20px",
            boxShadow: 24,
            borderRadius: "5px",
            width: { xs: "90%", md: "50%" },
          }}
        >
          <TextField
            fullWidth
            label="Search..."
            variant="outlined"
            InputProps={{
              endAdornment: (
                <IconButton onClick={toggleSearch}>
                  <FaSearch />
                </IconButton>
              ),
            }}
          />
        </Box>
      </Modal>
    </>
  );
};

export default Navbar;
