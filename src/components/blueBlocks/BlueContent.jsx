import React from "react";
import "./style.scss"

function BlueContent(){
    return(
        <div id="blue__world">
        <img src="./images/bg3.png" alt="" class="bg__thr"/>
        <div class="container">
            <div class="blue__work__content">
                <div class="first__block">
                    <img src="./images/ourEmp.svg" alt="" class="out__emp"/>
                    <img src="./images/zeon.svg" alt="" class="out__emp"/>
                </div>
                <div class="second__block">
                    <img src="./images/two.svg" alt="" class="two__item"/>
                    <p class="second__block_title">Our main goal is to give people their dream job</p>
                    <p class="second__block_subtitle">Alybek  Фамилия</p>
                    <p class="second__block_descr">CEO</p>
                </div>
                <div class="therd__block">
                    <div class="therd__text">
                        <p class="therd__title">
                            We made a lot of mistakes, <span class="therd__span">And we've learned not to make them.</span>
                        </p>
                        <p class="therd__descr">
                            Our employees strive for the best quality development and in working on interesting product Our employees strive for the best quality 
                        </p>
                        <button class="nav__btn therd__btn">Contact Us</button>
                    </div>
                    <div class="therd__img">
                        <img src="./images/therd.png" alt="" class="therd__img"/>
                        <button class="play__btn"><img src="./images/play.svg" alt="" class="play"/></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default BlueContent