import React, { useState } from "react";
import { AiOutlineMail, AiOutlinePhone, AiOutlinePlus, AiOutlineWhatsApp } from "react-icons/ai";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components/Layouts";

export default function MainLayout() {
    const [viewIcons, setViewicons] = useState(false)
    return (
        <main>
            <Navbar />
            <Outlet />
            <Footer />
            <div className='fixed right-5 bottom-5 md:right-10 md:bottom-10 '>
                <div className={` absolute right-0 transition-all duration-1000 h-14 w-14 rounded-full flex justify-center items-center text-3xl text-light bg-lightblue hover:blue ${viewIcons ? "bottom-60" : "bottom-0"} `}><a href="mailto:aswinjitht5@gmail.com"><AiOutlineMail /></a></div>
                <div className={`absolute right-0 transition-all duration-1000 h-14 w-14 rounded-full flex justify-center items-center text-3xl text-light bg-darktext hover:blue   ${viewIcons ? "bottom-40" : "bottom-0"}`}> <a href="tel:+919846000000"><AiOutlinePhone /></a></div>
                <div className={`absolute right-0   transition-all duration-1000 h-14 w-14 rounded-full flex justify-center items-center text-3xl text-light bg-green-500 hover:blue  ${viewIcons ? "bottom-20" : "bottom-0"} `}><a href="https://wa.me/+919100000000"><AiOutlineWhatsApp /></a></div>
                <button className={`absolute right-0 bottom-0 transition-all duration-300 rounded-full flex justify-center items-center text-3xl text-light bg-lightblue hover:blue z-20 ${viewIcons ? "h-16 w-16 " : " h-14 w-14"} `} onClick={() => setViewicons(!viewIcons)}><AiOutlinePlus /> </button>
            </div>
        </main>
    );
}