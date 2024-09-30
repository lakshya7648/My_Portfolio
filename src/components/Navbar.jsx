/**
 * Node modules
 */
import React, { useState } from 'react'




const Navbar = () => {
    const [chosenLink, setChosenLink] = useState(window.location.hash? window.location.hash : "#home");

    const navItems = [
        {
            navId : 101, 
            itemName:"Home",
            className : "nav-item",
            href : "#home"
        },
        {
            navId : 102,
            itemName:"About",
            className : "nav-item",
            href : "#about"
        },
        {
            navId : 103, 
            itemName:"Skills",
            className : "nav-item",
            href : "#skills"
        },
        {
            navId : 104, 
            itemName:"Projects",
            className : "nav-item",
            href : "#projects"
        },
        {
            navId : 105,
            itemName:"Contact",
            className : "nav-item md:hidden",
            href : "#contact"
        },
    ]


  return (
    <nav className="self-center">
       
        <div className="relative flex flex-col md:flex-row px-1 justify-center items-center">

          {navItems.map(({ navId, itemName, className, href })=>{

            return (
                <a 
                key={navId}
                href={href} 
                className={`${className} + ${chosenLink == href ? "active" : ""}`}
                onClick={ () => setChosenLink(href) }
                >
                    {itemName}
                </a>
            )

          })}

        </div>
        
    </nav>
  )
}

export default Navbar
