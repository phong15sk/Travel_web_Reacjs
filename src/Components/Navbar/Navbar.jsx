import React from "react";
import './navbar.css'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { PiDotsNineBold } from 'react-icons/pi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useState } from "react";

const Navbar = () => {
    const [activeNavbar, setActiveNavbar] = useState('navbar')

    const onShowNavBar = () => {
        setActiveNavbar('navbar activeNavbar')
    }

    const onCloseNavBar = () => {
        setActiveNavbar('navbar')
    }

    return (
        <div className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1> <MdOutlineTravelExplore className='icon' /> Travel</h1>
                    </a>
                </div>
                <div className={activeNavbar} >
                    <ul className="navList flex">
                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Packages</a></li>
                        <li className="navItem">
                            <a href="#" className="navLink">Shop</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">About</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Pages</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Contact</a>
                        </li>
                        <button className="book btn">
                            <a href="#">BOOK NOW</a>
                        </button>
                    </ul>
                    <div className="closeNavbar" onClick={() => onCloseNavBar()}><AiFillCloseCircle className="icon" /></div>
                </div>
                <div className="toggleNavbar" onClick={() => onShowNavBar()}>
                    <PiDotsNineBold className="icon" />
                </div>
            </header>
        </div>
    )
}

export default Navbar