import React from "react";
import "./style.scss"


function Stack(){
    return(
<div id="stack">
        <div class="front">
            <p class="front__title">
                Front end
            </p>
            <div class="front__imgs">
                <img src="./images/1.svg" alt="" class="front_img"/>
                <img src="./images/2.svg" alt="" class="front_img"/>
                <img src="./images/3.svg" alt="" class="front_img"/>
                <img src="./images/4.svg" alt="" class="front_img"/>
                <img src="./images/5.svg" alt="" class="front_img"/>
                <img src="./images/6.svg" alt="" class="front_img"/>
            </div>
        </div>
        <div class="stack__content">
            <div class="stack__text">
               <div class="">
                <p class="stack__title">Our stack</p>
                <p class="stack__descr">Our employees strive for the best quality development and in working on</p>
               </div>
            </div>
            <div class="mobile">
                <p class="front__title">
                    Mobile
                </p>
                <div class="front__imgs">
                    <img src="./images/7.svg" alt="" class="front_img"/>
                    <img src="./images/8.svg" alt="" class="front_img"/>
                    <img src="./images/9.svg" alt="" class="front_img"/>
                    <img src="./images/10.svg" alt="" class="front_img"/>
                </div>
            </div>
        </div>
        <div class="back">
                <p class="front__title">
                    Backend
                </p>
                <div class="front__imgs">
                    <img src="./images/11.svg" alt="" class="front_img"/>
                    <img src="./images/12.svg" alt="" class="front_img"/>
                    <img src="./images/13.svg" alt="" class="front_img"/>
                    <img src="./images/14.svg" alt="" class="front_img"/>
                    <img src="./images/15.svg" alt="" class="front_img"/>
                    <img src="./images/16.svg" alt="" class="front_img"/>
                </div>
        </div>
    </div>
    )
}
export default Stack