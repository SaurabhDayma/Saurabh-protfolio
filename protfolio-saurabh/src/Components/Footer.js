import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {HiOutlineMail}  from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from  "../assets/Saurabh_resume6.pdf";
const Footer = () => {

    const links = [
        {
            id : 1,
            child : (
                <React.Fragment>
                  <FaLinkedin size={30}/>
               </React.Fragment>
            ),
            href : "https://www.linkedin.com/in/saurabh-dayma-%F0%9F%9A%80-0a55a4245/",
            style : "rounded-tr-md"
        },
        {
            id : 2,
            child: (
             <React.Fragment>
                <FaGithub size={30}/>
               </React.Fragment>
            ),
            href : "https://github.com/SaurabhDayma",
            style : "rounded-tr-md"
        },
        {
            id : 3,
            child : (
                <React.Fragment>
                  <BsFillPersonLinesFill size={30} />
                 </React.Fragment>
            ),
            href: resume,
            download: true,
        },
    ];


    return(
        <footer className="bg-black text-white py-8">
          
        <div class="text-center p-6 bg-black footer">
        <span class="text-white">&copy; 2024 Copyright - </span>
        <a class="link-underline text-white font-bold" href="#">Saurabh Dayma</a>
      </div>

        <div className="container mx-auto flex justify-center">
            {links.map(link => (
                <a key={link.id} href={link.href} className={`mx-5 ${link.style}`}>
                    {link.child}
                </a>
            ))}
        </div>
          
    </footer>

        
    )
}
export default Footer;