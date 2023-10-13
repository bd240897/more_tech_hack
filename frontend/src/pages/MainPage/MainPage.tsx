import React from 'react';
import Header from "@/components/pageUI/Header/Header";
import Test from "@/components/Test/Test";
import {Container, Typography} from "@mui/material";

const MainPage = () => {
    return (
        <>
            <Container>
                <Header/>
                <Test/>

                <Typography variant="h4" component="h1" gutterBottom>
                    Material UI Vite.js example in TypeScript
                </Typography>

            </Container>
        </>
    );
};

export default MainPage;
