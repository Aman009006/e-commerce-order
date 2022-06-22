import React from "react";
import "./style.scss"

function Company (){
return(
    <div id="our__company">
        <div class="container">
            <div class="our__company__content">
                <p class="company__title">
                    What people says about our company
                </p>
                <div class="company__images">
                    <img src="./images/upwork.svg" alt="" class="company__img"/>
                    <img src="./images/clutchco.svg" alt="" class="company__img" />
                </div>
            </div>
        </div>
    </div>
)
}
export default Company