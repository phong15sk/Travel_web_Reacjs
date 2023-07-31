import React  from "react";
import './navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {PiDotsNineBold} from 'react-icons/pi'

const Navbar = () => {
    return (
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex"> 
                        <h1> <MdOutlineTravelExplore className='icon'/> Travel</h1>
                    </a>
                </div>
                <div className="navbar">
                    <ul className="navList grid">
                        <li className="navItem">Home</li>
                        <li className="navItem">Packages</li>
                        <li className="navItem">Shop</li>
                        <li className="navItem">About</li>
                        <li className="navItem">Pages</li>
                        <li className="navItem">Contact</li>
                    </ul>
                    <button className="btn book">BOOK NOW</button>
                </div>
                <div className="toggleNavbar">
                <PiDotsNineBold className="icon"/>
                </div>
            </header>
        </section>
    )
}

export default Navbar