/**
 * Node Modules
 */

import { useState } from "react";

/**
 * Components
 */
import Navbar from "./Navbar";
import Button from "./Button";




const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed z-40 mb-20 w-full h-16 flex justify-between items-center py-2 px-2 bg-slate-900">
      <a
      href="/" 
      className="site-color font-extrabold text-[28px] ml-2 tracking-tight">Lakshya</a>

      <div className="hidden md:block ">
        <Navbar />
      </div>


      <Button 
        labels={"Contact Me!"}
        href = {"#contact"}
        className = {"btn-secondary hidden md:block"}
      />

      <button
        className="md:hidden bg-slate-700 flex justify-center items-center rounded-lg p-1 cursor-pointer hover:bg-slate-800"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span className="material-symbols-rounded text-[26px] transition-colors">{`${!open ? "menu" : "close"}`}</span>
      </button>

        <div className={`${!open ? "hidden":""} nav-open`}>
          <Navbar />
        </div>

    </header>
  );
};

export default Header;
