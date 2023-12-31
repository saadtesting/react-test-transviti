
import { Box, Divider, IconButton } from "@mui/material";
import "./post.scss"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';


const Post = ({ text, showImages }) => {
    return (
        <div className='post'>

            <div className="details-container">
                <div className="header">
                    <img src="Assets/profile-pic.png" className="profile-pic" />

                    <div className="name-date-container">
                        <div className="name">Ahmad Nur Fawaid</div>
                        <span className="date">12 April at 09.28 PM</span>
                    </div>

                    <Box sx={{ alignSelf: "flex-start" }}>
                        <IconButton size="small">
                            <MoreHorizIcon />
                        </IconButton>
                    </Box>
                </div>

                <div className="content">
                    <div className="post-text">{text}</div>

                    {showImages && (
                        <div className="images-container">
                            <div className="west">
                                <img src="Assets/post-pic-1.png" />
                            </div>
                            <div className="east">
                                <img src="Assets/post-pic-2.png" />
                                <img src="Assets/post-pic-3.png" />
                            </div>
                        </div>
                    )}
                </div>

                <Divider />

                <div className="actions-container">
                    <div className="action">
                        <img src="Assets/chat-icon.svg" />
                        <span className="detail">7 Comments</span>
                    </div>

                    <div className="action">
                        <img src="Assets/heart-icon.svg" />
                        <span className="detail">12 Likes</span>
                    </div>

                    <div className="action">
                        <img src="Assets/share-icon.svg" />
                        <span className="detail">0 Shares</span>
                    </div>
                </div>
            </div>

            <Divider />

            <div className="comment-container">
                <img src="Assets/profile-pic.png" className="profile-pic" />

                <div className="comment-box">
                    <textarea placeholder="Write your comment" />
                    <img src="Assets/attachment-icon.svg" />
                    <img src="Assets/smiley-icon.svg" />
                    <img src="Assets/gallery-icon.svg" />
                </div>
            </div>
        </div>
    )
}

export default Post