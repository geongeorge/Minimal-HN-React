import React, { useState, useEffect } from 'react';

import PostItem from '../utils/PostItem'
import { motion , useCycle} from "framer-motion"

import {getStories} from '../../api/api'


function Home() {
    const [isOpen, setOpen] = useState(false);

    const [posts,setPosts] = useState([]);
    const [showPosts,setShowPosts] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const stories = await getStories("top");
            setPosts(stories,()=>setOpen(true))
            // animate
            
        }
        // Update the document title using the browser API
        fetchData()
        
      },[]);

      useEffect(() => {
        if(posts.length>0) {
          setOpen(true)
        }
      })

      const variants = {
        open: {
          transition: { staggerChildren: 0.03, delayChildren: 0.2 }
        },
        closed: {
          transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
      };
    return (
        <div>

            <div>Home</div>
            <motion.div
              initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            >
            { posts.map((value, index) => {
                return (
                 <PostItem id={value} key={index}></PostItem>
                )  
            }) }
            </motion.div>
        </div>
    );
}

export default Home;
