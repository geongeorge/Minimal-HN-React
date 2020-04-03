import React,{ useState, useEffect } from 'react';
import { motion } from "framer-motion"

export default function PostItem(props) {


    const item = {
        open: {
          y: 0,
          opacity: 1,
          transition: {
            y: { stiffness: 1000, velocity: -100 }
          }
        },
        closed: {
          y: 50,
          opacity: 0,
          transition: {
            y: { stiffness: 1000 }
          }
        }
      };

    return (
        <motion.div variants={item}
        whileHover={{ scale: 1.01,className:"shadow" }}
        whileTap={{ scale: 0.99 }}
        className="border rounded p-2 mt-2"
        >{props.id}</motion.div>
    )
}