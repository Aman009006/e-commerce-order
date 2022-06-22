import React from "react";
import "./style.scss"

function Footer(){
    return(
        <footer>
        <div class="container">
            <div class="footer__content">
                <img src="./images/logo.svg" alt="" class="footer__logo"/>
                <ul>
                    <li><a href="" class="footer_li">Linkedin</a></li>
                    <li><a href="" class="footer_li">Instagram</a></li>
                    <li><a href="" class="footer_li">Telegram</a></li>
                    <li><a href="" class="footer_li">Tiktok</a></li>
                    <li><a href="" class="footer_li">Youtube</a></li>
                    <li><a href="" class="footer_li">Twitter</a></li>
                </ul>
                <div class="footer__line"></div>
                <div class="footer__contact">
                    <p class="f_contact">Develop by Zeon IT HUB</p>
                    <p class="f_contact">zeonithub@gmail.com</p>
                </div>
            </div>
        </div>
    </footer>
    )
}
export default Footer