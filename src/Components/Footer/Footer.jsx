
import { Divider } from "@mui/material"
import "./footer.scss"

const Footer = () => {
    return (
        <div className='footer'>
            <div className="line-1">
                <div className="link">Contact Us</div>
                <div className="link">Terms of Use</div>
                <div className="link">Cookies Policy</div>
                <div className="link">Help & Support</div>
            </div>

            <Divider />

            <div className="line-2">
                <div className="link">Facebook</div>
                <div className="link">Linkedin</div>
                <div className="link">Instagram</div>
                <div className="link">Youtube</div>
            </div>

            <Divider />

            <div className="line-3">
                <div className="link" style={{ flexGrow: 1 }}>Halal Networks © 2023. All rights reserved</div>
                <div className="link">User Agreement</div>
                <div className="link">Privacy Policy</div>
            </div>
        </div>
    )
}

export default Footer