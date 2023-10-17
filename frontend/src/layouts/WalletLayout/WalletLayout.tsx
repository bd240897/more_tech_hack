import React from 'react';
//style
import style from './MainLayout.module.sass';
//lib
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Outlet} from "react-router-dom";
//comp
import {Container} from "@mui/material";

function MainLayout() {
    return (
     <Container sx={{height: "100%"}}>
         <Outlet/>
     </Container>
    )
}

export default MainLayout;
