import React from "react";
import "./style.scss"

function Work(){
    return(
        <div id="work">
        <div class="container">
            <div class="work__content">
                <p class="work_title">How our work is structured</p>
                <p class="work_descr">
                    Our employees strive for the best quality development and in working on interesting product Our employees strive for the best
                </p>
                <button class="btn work__btn">Contact Us</button>   
                <div class="work__demonstration">
                    <div class="work__left">
                        <img src="./images/demo1.svg" alt="" class="work__img"/>
                        <p class="work__title">Starting an internship or starting a job </p>
                        <p class="work__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel condimentum velit, eget vulputate sapien.Lorem ipsum dolor sit amet</p>
                        <img src="./images/demo3.svg" alt="" class="work__img"/>
                        <p class="work__title">Starting work at one of the best companies</p>
                        <p class="work__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel condimentum velit, eget vulputate sapien.Lorem ipsum dolor sit amet</p>
                    </div>
                    <div class="work__center">
                        <div class="number">1</div>
                        <div class="g_line"><img src="./images/line.svg" alt=""/></div>
                        <div class="number sec">2</div>
                        <div class="g_line"><img src="./images/line.svg" alt=""/></div>
                        <div class="number thr">3</div>
                        <div class="g_line"><img src="./images/line.svg" alt=""/></div>
                        <div class="number fou">4</div>
                        <div class="g_line"><img src="./images/line.svg" alt=""/></div>
                    </div>
                    <div class="work__right">
                        <p class="work__title">Determining your level of knowledge </p>
                        <p class="work__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel condimentum velit, eget vulputate sapien.Lorem ipsum dolor sit amet</p>
                        <img src="./images/demo2.svg" alt="" class="work__img" />
                        <p class="work__title">Determining your level of knowledge  </p>
                        <p class="work__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel condimentum velit, eget vulputate sapien.Lorem ipsum dolor sit amet</p>
                        <img src="./images/demo4.svg" alt="" class="work__img" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Work