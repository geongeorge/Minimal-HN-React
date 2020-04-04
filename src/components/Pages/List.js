import React, { useState, useEffect } from 'react';

import PostItem from '../utils/PostItem'
import { motion , useCycle} from "framer-motion"

import { css } from "@emotion/core";
import BarLoader from "react-spinners/BarLoader";

import {getStories,storyTypes} from '../../api/api'


export default function List(props) {
    const [isOpen, setOpen] = useState(false);
    const [isLoaded, setLoaded] = useState(false);

    const [posts,setPosts] = useState([]);

    useEffect(() => {
      let isSubscribed = true
        async function fetchData() {
          let typeOfStory = "top"

            if(!props.story) {
              typeOfStory = "top"
            } else if(storyTypes.includes(props.story)) {
              typeOfStory = props.story
            } else {
              //404 here
            }
            const stories = await getStories(typeOfStory);
            if(isSubscribed) {
                setPosts(stories)
                setLoaded(true)
            }
            
            // animate
            
        }
        // Update the document title using the browser API
        fetchData()

        return () => isSubscribed = false
        
      },[]);

      useEffect(() => {
        if(posts.length>0) {
          setOpen(true)
        }
      },[posts])

      const override = css`
          display: block;
          margin: 0 auto;
        `;

      const variants = {
        open: {
          transition: { staggerChildren: 0.03, delayChildren: 0.2 }
        },
        closed: {
          transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
      };
    return (
        <div key={props.story}>
            {/* <div>{props.story}</div> */}
            <motion.div
              initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            >
            { posts.map((value, index) => {
                return (
                 <PostItem id={value} story={props.story} key={props.story+index.toString()}></PostItem>
                )  
            }) }
            </motion.div>
            <BarLoader
          css={override}
          size={150}
          color={"#123abc"}
          loading={!isLoaded}
        />
        </div>
    );
}

