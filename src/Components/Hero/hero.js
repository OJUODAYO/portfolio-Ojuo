import {motion} from 'framer-motion';
import './hero.css';
import HeroImg from "../../assets/HeroPfp.png";
import scrollImg from "../../assets/scroll.png";


const textVariants = {
    initial: {
        x: -500,
        opacity:0,
        
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat:Infinity,
        },
    },
};

const sliderVariants = {
    initial: {
        x: -0,
    },
    animate: {
        x: "-220%",
        repeat:Infinity,
        repeatType:"mirror",
        transition: {
            duration: 20,
        },
    },
};

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div
                 className="text-container" 
                 variants={textVariants} 
                 initial="initial" 
                 animate="animate" 
                 >
                    <motion.h2  variants={textVariants}>OJUO DAYO</motion.h2>
                    <motion.h1  variants={textVariants}>Web developer and UI designer</motion.h1>
                    <motion.div  variants={textVariants}  className="buttons">
                        <motion.button  
                        variants={textVariants} 
                        >See the Latest Works</motion.button>
                        <motion.button   
                        variants={textVariants}
                         >Contact Me</motion.button>
                    </motion.div>
                    <motion.img  variants={textVariants} animate="scrollButton" src={scrollImg} alt="scrollImg" className="ScrollImg" />
                </motion.div>
                </div>
                <motion.div className="SlidingTextcontainer" variants={sliderVariants} initial="initial" animate="animate">
                    Writer Content Creator InFluencer
                </motion.div>
            <div className="ImageContainer">
                <img src={HeroImg} alt="HeroImg" />
            </div>
        </div>
    )
}

export default Hero