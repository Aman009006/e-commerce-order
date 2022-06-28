import React from "react";
import "./style.scss"

function ToVacancy (){

return(
    <>
    <div className="vacancy">
        <div className="container">
            <div className="vacancy__content">
              <div className="vacancy__block">
                <p className="vacancy__title">Respond to the vacancy</p>
                <p className="vacancy__descr">Our employees strive for the best quality development and in working on interesting products</p>
                <input type="text" placeholder="zeon" className="vacancy__input" />
                <input type="text" placeholder="zeon" className="vacancy__input" />
                <select name="Frontend" id="select" className="vacancy__select">
                    <option value="Frontend">Frontend</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Frontend">Frontend</option>
                </select>
                <select name="Frontend" id="select" className="vacancy__select">
                    <option value="Frontend">10. I can do everything</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Frontend">Frontend</option>
                </select>
                <select name="Frontend" id="select" className="vacancy__select">
                    <option value="Frontend">Kyrgyzstan</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Frontend">Frontend</option>
                </select>
                <div className="for__vc">
                    <p className="vc__title">Upload your CV</p>
                    <img src="/images/Upload.svg" alt="" className="vc__img" />
                </div>
                <div className="checkbox">
                    <input type="checkbox" id="checkbox" className="vc__checkbox" />
                    <p className="chechbox__title">Я принимаю  <span>“Политику конфиденциальности”</span>  </p>
                </div>
                <button className="submit__btn">
                    Send
                </button>
              </div>
            </div>
        </div>
    </div>
    </>
)

}
export default ToVacancy