// import "./portfolio.css";
// import { motion, useScroll, useSpring } from "framer-motion";
// // import { useInView } from 'react-intersection-observer';
// import { useRef } from 'react';


// const items = [
//     {
//         id: 1,
//         title: "React Commerce",
//         img: "https://www.pexels.com/photo/a-bearded-man-playing-chess-8438922/",
//         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     },
//     {
//         id: 2,
//         title: "Next.js Commerce",
//         img: "https://www.pexels.com/photo/a-bearded-man-playing-chess-8438922/",
//         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     },
//     {
//         id: 3,
//         title: "Vanilla JS App",
//         img: "https://www.pexels.com/photo/a-bearded-man-playing-chess-8438922/",
//         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     },
//     {
//         id: 4,
//         title: "Music App",
//         img: "https://www.pexels.com/photo/a-bearded-man-playing-chess-8438922/",
//         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     },
// ];


// const Single = ({items}) =>{
//     return (
//         <section>
//             {items.title}
//         </section>
//     )
// }





// const Portfolio = () => {

//     const ref= useRef()

//     const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"] 
// });

//  const scaleX = useSpring(scrollYProgress,{
//     stiffness:100,
//     damping: 30,
//  })

//   return (
//   <div className="portfolio" ref={ref}>
//     <div className="progress">
//         <h1>Featured Works</h1>
//         <motion.div style={{ scaleX }} className="progressBar"></motion.div>
//     </div>
//         {items.map(item=>(
//             <Single item={item} key={item.id} />
//         ))}
//     </div>
//   );
// };

// export default Portfolio;