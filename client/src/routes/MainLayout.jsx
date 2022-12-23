import React, { useState, useEffect } from "react";
import { AiOutlineMail, AiOutlinePhone, AiOutlinePlus, AiOutlineWhatsApp } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components/Layouts";
import { getHelplines } from '../redux/slices/generalSlice.js'

export default function MainLayout() {
    const dispatch = useDispatch()

    const { helplines } = useSelector(state => state.general)

    useEffect(()=> {
        dispatch(getHelplines())
    },[dispatch])
    const [viewIcons, setViewicons] = useState(false)
    return (
        <main>
            <Navbar />
            <Outlet />
            <Footer />
            {/* {helplines?.map((data) => ( */}
            <div className='fixed right-7 bottom-10 md:right-10 md:bottom-10'>
                <div className={` absolute right-0 transition-all duration-1000 h-14 w-14 rounded-full flex justify-center items-center text-3xl text-light bg-lightblue hover:blue ${viewIcons ? "bottom-60" : "bottom-0"} `}><a href={`mailto:test@email.com`}><AiOutlineMail /></a></div>
                <div className={`absolute right-0 transition-all duration-1000 h-14 w-14 rounded-full flex justify-center items-center text-3xl text-light bg-darktext hover:blue   ${viewIcons ? "bottom-40" : "bottom-0"}`}> <a href={`tel:+918606169589`}><AiOutlinePhone /></a></div>
                <div className={`absolute right-0   transition-all duration-1000 h-14 w-14 rounded-full flex justify-center items-center text-3xl text-light bg-green-500 hover:blue  ${viewIcons ? "bottom-20" : "bottom-0"} `}><a href={`https://wa.me/+918606169589`}><AiOutlineWhatsApp /></a></div>
                <button className={`absolute right-0 bottom-0 transition-all duration-300 rounded-full flex justify-center items-center text-3xl text-light bg-lightblue hover:blue z-20 ${viewIcons ? "h-16 w-16 " : " h-14 w-14"} `} onClick={() => setViewicons(!viewIcons)}><AiOutlinePlus /> </button>
            </div>
            {/* ))} */}
        </main>
    );
}