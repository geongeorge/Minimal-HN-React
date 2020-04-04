import React,{ useState, useEffect } from 'react';
import { motion } from "framer-motion"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {getPost} from '../../api/api'

import moment from 'moment'

export default function PostItem(props) {
    const [postData, setPostData] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        async function fetchData() {
            const data = await getPost(props.id);
            setPostData(data)
            // animate
            
        }
        // Update the document title using the browser API
        fetchData()
        
      },[]);

    useEffect(() => {
        if(postData && Object.keys(postData).length>0) {
            // loaded
            setLoaded(true)
            // console.log(postData)
            // console.log(moment.unix(postData.time))
        }
    },[postData])


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
        <div>
        {loaded? (
        <motion.div variants={item}
        whileHover={{ scale: 1.01, boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" }}
        whileTap={{ scale: 0.99 }}
        className="border rounded p-2 mt-2"
        > <div className="w-full flex cursor-pointer group">
            <div className="flex-1">
                <div className="group-hover:underline">{postData.title}</div>
                <div className="text-gray-500 flex flex-row justify-start mt-1 text-sm">
                    <div className="flex-0 mr-2"><FontAwesomeIcon icon={['far','user']} className="text-gray-500" /> {postData.by}</div> 
                    <div className="flex-0 mr-2"><FontAwesomeIcon icon={['far','clock']} className="text-gray-500" /> {moment.unix(postData.time).fromNow()}</div> 
                    <div className="flex-0"><FontAwesomeIcon icon={['far','comments']} className="text-gray-500" /> {postData.kids?postData.kids.length:"0"}</div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center px-2 text-3xl">
            <span>{postData.score} <FontAwesomeIcon icon='caret-up' className="text-gray-500" /></span> 
            </div>
        </div>
        </motion.div> ): (<div></div>)}
        </div>
    )
}