import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from '../helpers/dropdown'

import xboxXSImg from '../assets/imgs/xboxx.png';
import xboxImg from '../assets/imgs/xbox.png';
import dropdownImg from '../assets/imgs/dropdown-arrow.png';
import secureImg from '../assets/imgs/secure.png';

const SignUp = () => {

    return (
        <div className="form-content">
            <form action="POST" className="signUp" id="signUp">
                <h2>Register</h2>
                <div className="innerform">
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email" />
                    <input
                        type="text"
                        placeholder="Gamertag"
                        name="tag" />
                    <Dropdown
                  trigger={['click']}
                  overlay={menu}
                  animation="slide-up"
                  onVisibleChange={onVisibleChange}>
                  <img src={dropdownImg}/>
                </Dropdown>
                    
                    <input
                        type="password"
                        placeholder="Password (6 to 12 characters)"
                        name="password" />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password"
                    />
                    <div className="robot-stack">
                        <div className="checkbox">
                            <div className="item-check">
                                <input type="checkbox" className="check-recaptcha" />
                            </div>
                            <p>I'm not a robot</p>
                            <img src={secureImg} />
                        </div>
                        <button type="submit">Sign Up</button>
                    </div>
                    <div className="sign-here">
                        <p>
                            Already have an account?
                            <Link to="/signin"> Sign In Here!</Link>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default SignUp;