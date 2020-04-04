import React,{useEffect,useState} from 'react';
import { Link, Match } from "@reach/router"
import {storyTypes} from '../../api/api'

import "./Nav.css"

const NavLink = props => (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        // the object returned here is passed to the
        // anchor element's props
        return {
           className:  isCurrent ? "font-bold underline" : ""
        };
      }}
    />
  );


export default function Nav(props) {

  const [typeList, setTypeList] = useState([])

  useEffect(() => {
    const types = storyTypes.map((el)=>{
      let text = el.charAt(0).toUpperCase() + el.slice(1)
      let link = el
      if(el==="top") link = "/"
      return {text,link}
    })
    setTypeList(types)
  },[])
  

    return (
        
        <header className="App-header">
            <div className="bg-gray-200">
            <nav className="container p-4 mx-auto App-nav">
              {
                typeList.map((val,index) => {
                  return <NavLink key={index} to={val.link}>{val.text}</NavLink>
                })
              }
            </nav>
            <div>
            </div>
            </div>
        </header>
    )
}