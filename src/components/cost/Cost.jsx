import React from "react";
import "./style.scss"

function Cost(){
    return(
        <div id="cost">
        <div class="white__block">
            <div class="how__much_text">
                <p class="how__much__title">
                    How much will it cost?
                </p>
                <p class="how__much__descr">
                    We are able to provide 25%-45% better rates than most of the US or EU based agencies. There is no secrete souce: only lower taxes. We pay all the taxes and insurance fees locally thus reducing the tax burden.
                </p>
                <div class="chechbox">
                    <img src="./images/checkbox.svg" alt="" class="check"/>
                    <p class="check__title">Transparent, fixed fees</p>
                </div>
                <div class="chechbox">
                    <img src="./images/checkbox.svg" alt="" class="check"/>
                    <p class="check__title">Seemless transactions
                    </p>
                </div>
                <div class="chechbox">
                    <img src="./images/checkbox.svg" alt="" class="check" />
                    <p class="check__title">Pay as you go fees
                    </p>
                </div>
            </div>
        </div>
        <div class="sky__block">
            <div class="how__much__graph">
                <img src="./images/graph.svg" alt="" class="graph" />
            </div>
        </div>
    </div>
    )
}
export default Cost