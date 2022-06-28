import React from "react";
import "./style.scss"

function Mistakes (){

return(
    <>
    <div className="container">
        <div className="mistakes__content">
            <div className="mistakes__video">
                <img src="/images/video_image.png" alt="" className="mistakes__video__img" />
                <img src="/images/playbtn.svg" alt="" className="play__btn" />
            </div>
            <div className="mistakes__text__content">
                <p className="mistakes__title">We made a lot of mistakes, And we've learned not to  make them.</p>
                <p className="mistakes__descr">We are able to provide 25%-45% better rates than most of the US or EU based agencies. There is no secrete We are able to provide 25%-45% </p>
                <div className="block__comment">
                    <p className="mistake__comment">We are able to provide 25%-45% better rates than most of the US or EU based agencies. There is no secrete</p>
                    <p className="mistake__owner">-Alybek  Фамилия, CEO</p>
                    <img src="/images/zp.svg" alt="" className="zp" />
                </div>
            </div>
        </div>
    </div>
    </>
)

}
export default Mistakes