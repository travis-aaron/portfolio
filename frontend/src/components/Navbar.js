import { Link } from "react-scroll";
import { useState } from 'react';

function Navbar(){ 

    let links=[        <ul>
        <li className="cursor-pointer md:inline">
            <Link
                to="about"
                activeClass="active"
                className="hover:text-[#938f8e] hover:scale-110 duration-500 mx-3"
                isDynamic={true}
                smooth={true}
                spy={true}
                offset={-100}
                duration={500}
            >
                About
            </Link>
        </li>
        <li className="cursor-pointer md:inline">
            <Link
                to="projects"
                activeClass="active"
                className="hover:text-[#938f8e] hover:scale-110 duration-500 mx-3"
                exact="true"
                isDynamic={true}
                smooth={true}
                spy={true}
                offset={-100}
                duration={500}
            >
                Projects
            </Link>
            </li>
            <li className="cursor-pointer md:inline">
                <Link
                    to="certs"
                    activeClass="active"
                    className="hover:text-[#938f8e] hover:scale-110 duration-500 mx-3"
                    exact="true"
                    isDynamic={true}
                    smooth={true}
                    spy={true}
                    offset={-100}
                    duration={500}
                >
                    Certifications 
                </Link>
                </li>    
                <li className="cursor-pointer md:inline">
                <Link
                    to="connect"
                    activeClass="active"
                    className="hover:text-[#938f8e] hover:scale-110 duration-500 mx-3"
                    exact="true"
                    isDynamic={true}
                    smooth={true}
                    spy={true}
                    offset={-100}
                    duration={500}
                >
                    Connect 
                </Link>
                </li>    
        </ul>]
    let [open,setOpen]=useState(false);
    
    return (

        <nav className="sticky top-0 max-w opacity-80 max-h-4xl h-12 bg-gradient-to-b from-transparent/80 ...  ">
        <div className='opacity-100 text-green-500 font-body'>        
            <div onClick={()=>setOpen(!open)} className="sm:visible md:hidden py-3 px-3">
                <ion-icon size="large" className ='sm:visible md:hidden' name={open ? 'close':'menu'}></ion-icon>
            </div>
            <div className="hidden md:block">{links}</div>
            { open ? links : <div></div>}
        </div>
        </nav>
)}

export default Navbar