import React from "react";
import './home.css'
import video from '../../Assets/video.mp4'
import { FaLocationDot } from 'react-icons/fa6'
const Home = () => {
    return (
        <div className="home">
            <div className="overlay">
            </div>
            <video src={video} muted autoPlay loop typeof="video/mp4"></video>
            <div className="homeContent container">
                <div className="textDiv">
                    <span className="smallText">Our Packages</span>
                    <h1 className="homeText">Search Your Holiday</h1>
                </div>
                <div className="destinationContent">
                    <div className="destination search">
                        <label htmlFor="city">Search your destination:</label>
                        <div className="input flex">
                            <input type="text" placeholder="Enter name here ..."/>
                            <FaLocationDot className="icon" />
                        </div>

                    </div>
                    <div className="destination date">
                        <label htmlFor="date">Select your date:</label>
                        <div className="input flex">
                            <input type="date" />
                        </div>
                    </div>
                    <div className="destination price">
                        <div className="priceLable flex">
                            <label htmlFor="lable">Max Price:</label>
                            <label className="price-total-max">$5000</label>
                        </div>
                        <div className="input flex">
                            <input type="range" min="1000" max="5000" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home