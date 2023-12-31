import React from "react";
import "./profile-header.scss";

// MUI
import { Box, Button } from "@mui/material";

const ProfileHeader = () => {
    return (
        <Box
            className="profile-header-container"
            sx={{
                display: { xs: "none", md: "flex" }
            }}
        >
            <div className="main-wrapper">
                <div className="background-overlay" />

                <div className="edit-profile-button">
                    <Button
                        variant="contained"
                        sx={{
                            textTransform: 'none',
                            "fontSize": "16px",
                        }}
                        startIcon={<img src="Assets/pencil-icon.svg" />}
                    >
                        Edit Profile
                    </Button>
                </div>

                <div className="user-name">Ahmad Nur Fawaid</div>
                <div className="user-handle">@fawait</div>

                <img
                    className="cover-image"
                    src="Assets/cover-pic.png"
                    alt="Cover Pic"
                />

                <div className="profile-circle" />

                <img
                    className="profile-image"
                    src="Assets/profile-pic.png"
                    alt="Profile Pic"
                />
            </div>
        </Box>
    );
};


export default ProfileHeader