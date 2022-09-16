import React, { useContext, useState } from "react";
import NavBar from "../../components/navigation";
import CallModel from "../../components/notifications";
import Options from "../../components/option";
import VideoMode from "../../components/video";
import MainLayOut from "../layout/mainLayout";

import { SocketContext } from "../../components/socketContext";

const Home = () =>{
    return(
        <MainLayOut>
            <NavBar/>
            <VideoMode/>
            <Options/>
        </MainLayOut>
    )
}

export default Home;