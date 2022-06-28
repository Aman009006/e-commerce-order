import React from "react"
import AboutUs from "./AboutUs/AboutUs";
import Diploms from "./Diploms/Diploms";
import Mistakes from "./Mistakes/Mistakes";
import Mistakes2 from "./Mistakes2/MistakesSec";
import ToVacancy from "./ToVacancy/ToVacancy";


import "./_main.scss";

function Main(){
    return(
        <> 
       <Mistakes/>
       <Mistakes2/>
       <AboutUs/>
       <Diploms/>
       <ToVacancy/>
        </>
    )
}
export default Main