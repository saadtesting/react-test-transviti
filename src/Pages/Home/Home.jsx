
// components
import EastPosts from "./EastPosts"
import ProfileHeader from "./ProfileHeader/ProfileHeader"
import WestProfileInfo from "./WestProfileInfo"

// mui
import { Grid } from "@mui/material"

import "./home.scss"
import Footer from "../../Components/Footer/Footer"

const Home = () => {
    return (
        <div id='home-page'>
            <ProfileHeader />

            <Grid container marginTop={1} spacing={2}>
                <Grid item xs={12} md={5}>
                    <WestProfileInfo />
                </Grid>

                <Grid item xs={12} md={7}>
                    <EastPosts />
                    <Footer />
                </Grid>
            </Grid>
        </div>
    )
}

export default Home