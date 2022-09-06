import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import xboxXSImg from '../assets/imgs/xboxx.png';
import xboxImg from '../assets/imgs/xbox.png';
import secureImg from '../assets/imgs/secure.png';

const consoleOpts = ['Xbox Series X/S', 'Xbox One'];

const SignIn = () => {

    return (
        <div className="form-content">
            <form action="POST" className="signIn" id="signIn">
                <h2>Sign In</h2>
                <div className="innerform">
                    <input
                        type="email"
                        placeholder="Email Address/Gamertag"
                        name="email" />
                    <Dropdown options={consoleOpts} placeholder="Please Select your Console" />
                    <input
                        type="password"
                        placeholder="Password (6 to 12 characters)"
                        name="password" />
                    <div class="robot-stack">
                        <div class="checkbox">
                            <div class="item-check">
                                <input type="checkbox" class="check_the_heart" />
                            </div>
                            <p>I'm not a robot</p>
                            <img src={secureImg} />
                        </div>
                        <button type="submit">Sign In</button>
                    </div>
                    <div class="sign-here">
                        <p>
                            Don't have an account? 
                            <Link to="/signup"> Sign Up Here!</Link>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default SignIn;