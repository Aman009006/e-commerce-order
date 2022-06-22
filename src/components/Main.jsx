import React from "react"
import BlueContent from "./blueBlocks/BlueContent";
import Client from "./client/Client";
import Company from "./company/Company";
import Cost from "./cost/Cost";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import ItCost from "./itcost/Itcost";
import Nav from "./navigation/Nav"
import Stack from "./stack/Stack";
import Work from "./work/Work";

import "./_main.scss";

function Main(){
    return(
        <> 
        <Nav/>
        <Header/>
        <Client/>
        <Company/>
        <BlueContent/>
        <Cost/>
        <ItCost/>
        <Stack/>
        <Work/>
        <Footer/>
        </>
    )
}
export default Main