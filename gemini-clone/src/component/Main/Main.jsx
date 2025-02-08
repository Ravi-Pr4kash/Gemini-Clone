import React from "react";
import '../Main/Main.css'
import { assets } from "../../assets/assets";

const Main = () => {
    return (
        <div className="Main">
            <div className="nav">
               <p>Gemini</p>
               <img src={assets.user_icon } alt="" />
            </div>

            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Ravi.</span></p>
                    <p>How Can I Help You Today</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest Beautiful Places to See on an Upcoming Roadtrip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Briefly summarize this concept: Urban Planning</p>
                        <img src={assets.bulb_icon } alt="" />
                    </div>
                    <div className="card">
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Improve the readability of the follwoing code</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder="Enter a Prompt here"/>
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemimni may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main