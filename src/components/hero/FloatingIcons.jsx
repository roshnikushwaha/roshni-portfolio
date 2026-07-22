// "use client";

// import { motion } from "framer-motion";

// import {
//  FaReact,
//  FaNodeJs,
//  FaGithub,
//  FaHtml5,
//  FaCss3Alt,
//  FaJs,
// } from "react-icons/fa";

// import {
//  SiNextdotjs,
//  SiMongodb,
//  SiExpress,
//  SiTailwindcss,
// } from "react-icons/si";

// const icons = [

// {
// icon:<FaReact/>,
// top:"8%",
// left:"12%",
// color:"#61DAFB",
// duration:5,
// },

// {
// icon:<SiNextdotjs/>,
// top:"18%",
// right:"5%",
// color:"#ffffff",
// duration:6,
// },

// {
// icon:<FaNodeJs/>,
// top:"70%",
// left:"0%",
// color:"#68A063",
// duration:7,
// },

// {
// icon:<SiMongodb/>,
// top:"80%",
// right:"8%",
// color:"#13aa52",
// duration:5,
// },

// {
// icon:<SiTailwindcss/>,
// top:"40%",
// left:"-2%",
// color:"#38BDF8",
// duration:6,
// },

// {
// icon:<FaGithub/>,
// top:"50%",
// right:"-2%",
// color:"#ffffff",
// duration:5,
// },

// {
// icon:<FaJs/>,
// top:"5%",
// right:"35%",
// color:"#F7DF1E",
// duration:4,
// },

// {
// icon:<FaHtml5/>,
// top:"88%",
// left:"30%",
// color:"#E44D26",
// duration:5,
// },

// {
// icon:<FaCss3Alt/>,
// top:"85%",
// right:"35%",
// color:"#1572B6",
// duration:6,
// },

// {
// icon:<SiExpress/>,
// top:"32%",
// right:"22%",
// color:"#AAAAAA",
// duration:7,
// },

// ];

// export default function FloatingIcons(){

// return(

// <>

// {

// icons.map((item,index)=>(

// <motion.div

// key={index}

// animate={{

// y:[-20,20,-20],

// rotate:[0,10,-10,0],

// }}

// transition={

// {

// duration:item.duration,

// repeat:Infinity,

// }

// }

// style={{

// position:"absolute",

// top:item.top,

// left:item.left,

// right:item.right,

// fontSize:"40px",

// color:item.color,

// }}

// className="drop-shadow-[0_0_20px_currentColor]"

// >

// {item.icon}

// </motion.div>

// ))

// }

// </>

// )

// }