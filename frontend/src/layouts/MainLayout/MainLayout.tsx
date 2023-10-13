import React from 'react';
//style
import style from './MainLayout.module.sass';
//lib
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Outlet} from "react-router-dom";
//comp
import Footer from "@/components/pageUI/Footer/Footer";
import Content from '@/components/pageUI/Contents/Content';
import Header from "@/components/pageUI/Header/Header";

function MainLayout() {
    return (
        <div className={style.main_layout}>
            <Header className={style.header}/>
            <Content className={style.content}>
                <ToastContainer position="top-center"/>

                <Outlet/>

            </Content>
            <Footer className={style.footer}/>
        </div>
    );
}

export default MainLayout;
