import React from 'react'
import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
  Avatar,
} from "@mui/material";
import avatar from "../../assets/images/avatar.jpeg";
const ContactUs = () => {
  return (
    <Box>
      <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
        <Avatar
          sx={{ width: 100, height: 100, margin: "auto" }}
          alt="Apostle Mengoulis"
          src={avatar}
        />
        <Typography variant="h5" sx={{ marginTop: 2 }}>
          Apostle Mengoulis
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#a8aab2",
            maxWidth: "600px",
            margin: "auto",
            marginTop: 1,
          }}
        >
          Apostle is a core member of the founding team at Viral Loops. He has
          worked closely with hundreds of referral marketing campaigns made with
          Viral Loops. Apostle has years of experience in growing and marketing
          companies and co-founded Growth Hacking University.
        </Typography>
      </Box>

      <Box
        sx={{ borderBottom: "1px solid #e0e0e0", marginBottom: "30px" }}
      ></Box>

      <Box>
        <Typography
          sx={{
            fontWeight: "bold",
            marginBottom: "20px",
            fontSize: "12px",
            textDecoration: "underline",
          }}
        >
          LEAVE A REPLY
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: "20px" }}>
          Your email address will not be published. Required fields are marked{" "}
          <Typography component="span" color="error">
            *
          </Typography>
        </Typography>
        <TextField
          label="Comment"
          variant="outlined"
          fullWidth
          required
          multiline
          rows={10}
          sx={{ marginBottom: "20px" }}
        />
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField label="Name" variant="outlined" fullWidth required />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="Email" variant="outlined" fullWidth required />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="Website" variant="outlined" fullWidth />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            color: "white",
            marginTop: "20px",
            mb: 3,
          }}
        >
          POST COMMENT
        </Button>
      </Box>
    </Box>
  );
}

export default ContactUs
