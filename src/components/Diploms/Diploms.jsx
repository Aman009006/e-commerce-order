import React from "react";
import "./style.scss"

function Diploms (){

return(
    <>
    <div className="diploms">
        <div className="container">
            <div className="diploms__content">
              <div className="diploms__text">
                <p className="diploms__title">We just focused on our student</p>
                <p className="diploms__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel elit elit  velit
condimentum velit, eget vulputate sapien. Mauris consequat ex eu elit commodo sagittis. Praesent auctor lorem a lacus congue, et lobortis</p>
              </div>
              <div className="dimploms__imgs">
                <img src="/images/diplom1.png" alt="" className="diploms__img" />
                <img src="/images/diplom2.png" alt="" className="diploms__img" />
                <img src="/images/diplom3.png" alt="" className="diploms__img" />
                <img src="/images/diplom4.png" alt="" className="diploms__img" />
                <img src="/images/diplom5.png" alt="" className="diploms__img" />
                <img src="/images/diplom6.png" alt="" className="diploms__img" />
                <img src="/images/diplom7.png" alt="" className="diploms__img" />
                <img src="/images/diplom8.png" alt="" className="diploms__img" />
              </div>
              <button className="download__more">
              Download more
              </button>
            </div>
        </div>
    </div>
    </>
)

}
export default Diploms