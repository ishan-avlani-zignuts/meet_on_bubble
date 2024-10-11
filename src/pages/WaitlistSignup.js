import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Avatar,
  AvatarGroup,
} from "@mui/material";
import logo from "../assets/images/logo.png";

const WaitlistSignup = () => {
    const [email, setEmail] = useState("");
    const [joined, setJoined] = useState(false);
    const [error, setError] = useState("");

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        console.log("Email submitted:", email);
        setJoined(true);
        setError("");
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                padding: 2,
                textAlign: "center",
            }}
        >
            <Box mb={2}>
                <img src={logo} alt="logo" style={{ height: "40px" }} />
            </Box>
            <Typography variant="h4" component="h1" gutterBottom>
                Signup to our waitlist
            </Typography>

            <Typography variant="body1" align="center" sx={{ mb: 3 }}>
                Updates, news, exclusive discounts, and so much more cool stuff happens
                behind-the-scenes
            </Typography>

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ width: "100%", maxWidth: 400 }}
            >
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={Boolean(error)}
                    helperText={error}
                    sx={{ mb: 2 }}
                />

                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ bgcolor: "purple", "&:hover": { bgcolor: "purple" } }}
                >
                    Join the waitlist
                </Button>
            </Box>

            <Box
                sx={{
                    mt: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <AvatarGroup max={4}>
                    <Avatar alt="User 1" src="/" />
                    <Avatar alt="User 2" src="/" />
                    <Avatar alt="User 3" src="/" />
                    <Avatar alt="User 4" src="/" />
                </AvatarGroup>
                <Typography variant="body2" sx={{ ml: 1 }}>
                    +5 others onboard
                </Typography>
            </Box>

            {joined && (
                <Typography variant="body1" sx={{ mt: 2, color: "green" }}>
                Thanks for joining the waitlist!
                </Typography>
            )}
        </Box>
    );
};

export default WaitlistSignup;
