import React from 'react';
import { Link, Match } from "@reach/router"

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

    return (
        
        <header className="App-header">
            <div className="bg-gray-200">
            <nav class="container p-4 mx-auto">
                <NavLink to="/">Home</NavLink> |{" "}
                <NavLink to="show">Show</NavLink>
            </nav>
            <div>
            </div>
            </div>
        </header>
    )
}