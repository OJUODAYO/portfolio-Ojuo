import './navbar.css';
import {motion} from "framer-motion";

import FaceBookIcon from '../../assets/facebook.png';
import dribbbleIcon from '../../assets/dribbble.png';
import YouTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import SideBar from '../SideBar/sidebar';

const NabBar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <SideBar />
      <div className="wrapper">
        <motion.span 
        initial={{opacity:0, scale:0.5}} 
        animate={{opacity:1, scale:1}} 
        transition={{duration:0.5}} 
        
        >OJUO
        </motion.span>
        <div className="social">
         <img src={FaceBookIcon} alt="facebookIcon" /> {/* need to put link tag here later */}
         <img src={InstagramIcon} alt="InstagramIcon" />
         <img src={YouTubeIcon} alt="YouTubeIcon" />
         <img src={dribbbleIcon} alt="dribbbleIcon" />
        </div>
      </div>
    </div>
  )
}

export default NabBar