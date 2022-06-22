import React from "react";
import "./style.scss"

function Nav(){
    return(
<nav>
        <div class="container">
            <div class="nav__content">
                <div class="burger">
                    <svg viewBox="0 0 100 80" width="40" height="30
                    ">
                        <rect width="90" height="10"></rect>
                        <rect y="30" width="90" height="10"></rect>
                        <rect y="60" width="90" height="10"></rect>
                      </svg>
                </div>
                <div class="nav__links">
                    <a class="nav__navigate" href="">About us</a>
                <a class="nav__navigate" href="">Career Opportunity</a>
                </div>
                <div class="nav__logo">
                    <img src="/images/logo.svg" alt="" class="logo"/>
                </div>
                <button class="nav__btn">Contact Us</button>
            </div>
        </div>
    </nav>
    )
}
export default Nav