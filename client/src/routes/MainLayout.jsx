import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components/Layouts";

export default function MainLayout() {
    return (
        <main>
            <Navbar/>
            <Outlet />
            <Footer />
        </main>
    );
}