import React from 'react';
import { useRef } from 'react';
import './services.css';
import { motion, useInView } from 'framer-motion';
import PeopleImg from '../../assets/people.webp';


const variants = {
    initial: {
        x:-500,
        y:100,
        opacity:0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration:1,
            staggerChildren: 0.1,
        },
    },
};

const Services = () => {

    const ref = useRef()

    const isInView = useInView(ref, {margin:"-100px"})


  return (
    <motion.div className="services" 
    variants={variants} 
    initial="initial" 
    // animate="animate"
    // whileInView="animate"
    ref={ref}
    animate={isInView && "animate"}
    >
        <motion.div className="textContainer"
         variants={variants}>
            <p>I Focus On Helping Your Brand Grow
                <br/> And Move Forward
                </p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer"  
        variants={variants}>
            <div className="title">
                <img src={PeopleImg} alt="PeopleImg" />
                <h1 className="H1">
                    <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
                    </h1>
            </div>
            <div className="title">
                <h1 className="H1">
                    <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
                    </h1>
                <button className="BtnServices">WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer">
            <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                <h2>Branding</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <button className="BtnGo">GO</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                <h2>Branding</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <button className="BtnGo">GO</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                <h2>Branding</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <button className="BtnGo">GO</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                <h2>Branding</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <button className="BtnGo">GO</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services