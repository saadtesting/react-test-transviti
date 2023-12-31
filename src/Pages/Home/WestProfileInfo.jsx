
// MUI
import { Box, Divider } from '@mui/material'

const WestProfileInfo = () => {
    return (
        <div className='west-profile-info'>
            <div className="card about-card">
                <div className="heading-container">
                    <h6 className="heading">About</h6>
                </div>

                <p className="text">
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                </p>

                <Box className="stats-container">
                    <div className="stat">
                        <p className="title">Posts</p>
                        <div className="count">1.3K</div>
                    </div>

                    <Divider orientation="vertical" flexItem />

                    <div className="stat">
                        <p className="title">Following</p>
                        <div className="count">3,154</div>
                    </div>

                    <Divider orientation="vertical" flexItem />

                    <div className="stat">
                        <p className="title">Followers</p>
                        <div className="count">2,054</div>
                    </div>
                </Box>

                <Box className="info-container">
                    <div className="info-box">
                        <img src="Assets/Peronsal Profile - About - Location Icon.svg" className="icon" />
                        <span className='info-name'>Yogyakarta, ID</span>
                    </div>

                    <div className="info-box">
                        <img src="Assets/Peronsal Profile - About - Relationship Status Icon.svg" className="icon" />
                        <span className='info-name'>Single</span>
                    </div>

                    <div className="info-box">
                        <img src="Assets/Peronsal Profile - About - Joined Date Icon.svg" className="icon" />
                        <span className='info-name'>Joined June 2012</span>
                    </div>

                    <div className="info-box">
                        <img src="Assets/Peronsal Profile - About - Web Link  Icon.svg" className="icon" />
                        <span className='info-name'>dribble.com/fawait</span>
                    </div>

                    <div className="info-box">
                        <img src="Assets/Peronsal Profile - About - Job Icon.svg" className="icon" />
                        <span className='info-name'>Working at Sebo Studio</span>
                    </div>
                </Box>
            </div>

            <div className="card photos-card">
                <div className="heading-container">
                    <h6 className="heading">Photos</h6>
                    <span className='view-all-photos'>View All</span>
                </div>

                <div className="photos-container">
                    <img src="Assets/gallery-pic-1.png" />
                    <img src="Assets/gallery-pic-2.png" />
                    <img src="Assets/gallery-pic-3.png" />
                    <img src="Assets/gallery-pic-4.png" />
                </div>
            </div>
        </div>
    )
}

export default WestProfileInfo