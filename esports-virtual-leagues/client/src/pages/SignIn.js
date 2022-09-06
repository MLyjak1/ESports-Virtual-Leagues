import React from "react";
import { Link, useNavigate } from 'react-router-dom';

import xboxXSImg from '../assets/imgs/xboxx.png';
import xboxImg from '../assets/imgs/xbox.png';
import dropdownImg from '../assets/imgs/dropdown-arrow.png';
import secureImg from '../assets/imgs/secure.png';

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
                    <div className="dropdown-console">
                        <div className="selected">
                            <img src={xboxXSImg} />
                            <p>Xbox Series X/S</p>
                            <div className="dropdown-img">
                                <img src={dropdownImg} />
                            </div>
                            <div className="dropdown-content">
                                <div className="select-new">
                                    <img src={xboxXSImg} />
                                    <p>XBox Series X/S</p>
                                </div>
                                <div className="select-new">
                                    <img src={xboxImg} />
                                    <p>XBox One</p>
                                </div>
                            </div>
                        </div>
                    </div>
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