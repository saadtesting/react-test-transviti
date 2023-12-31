import { IconButton, MenuItem, TextField } from "@mui/material"
import SearchCountrySelect from "../SearchCountrySelect/SearchCountrySelect"
import "./navbar.scss"

const Navbar = () => {
    return (
        <div id="navbar">
            <div className="container">
                <div className="left">
                    <img src="/Assets/company-logo.png" alt="company logo" />
                </div>

                <div className="center">
                    <SearchCountrySelect />
                </div>

                <div className="right">
                    <TextField
                        select
                        label="Explore"
                        sx={{
                            width: "120px",
                        }}
                        size="small"
                    >
                        <MenuItem value={1}>Option 1</MenuItem>
                        <MenuItem value={2}>Option 2</MenuItem>
                        <MenuItem value={3}>Option 3</MenuItem>
                    </TextField>

                    <IconButton className="icon-button">
                        <img src="Assets/bell-icon.svg" className="icon" />
                    </IconButton>

                    <IconButton className="icon-button">
                        <img src="Assets/chat-nav-icon.svg" className="icon" />
                    </IconButton>

                    <IconButton className="icon-button">
                        <img src="Assets/add-icon.svg" className="icon" style={{ width: "12px", height: "12px" }} />
                    </IconButton>

                    <img src="Assets/profile-pic.png" className="profile-pic" />
                </div>
            </div>
        </div>
    )
}

export default Navbar