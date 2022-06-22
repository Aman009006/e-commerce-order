import React from "react";
import "./style.scss"

function Header(){
    return(
<div id="header">
        <div class="container">
            <div class="header__content">
                <div class="header__text">
                    <h1 class="header__title">
                        We create an environment in which people want to <br/>
                        <span class="header__span">Grow and Develop</span>
                    </h1>
                    <p class="header__descr">
                        Our employees strive for the best quality development and in working on interesting products
                    </p>
                    <div class="header__actions">
                        <button class="header__btn btn">Contact Us</button>
                        <div class="header__action_play_video">
                            <button class="header__btn_play_video"><img src="./images/play__video.svg" alt="" class="play__video" /></button>
                            <p class="header__video_descr">Play video</p>
                        </div>
                    </div>
                </div>
                    <img src="./images/header__main.svg" alt="" class="header__main_img" />
            </div>
        </div>
    </div>
    )
}
export default Header