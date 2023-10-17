import React from 'react';
import {Image} from "@mui/icons-material";
import {Box} from "@mui/material";
import example from "../images/example_paper.png"
import ArrayBlock from "@/pages/TestPage/ArrayBlock/ArrayBlock";


const ExamplePaper = () => {
    return (
        <div>

            <ArrayBlock text={"Пример анкеты"} link={"/wallet"}/>

            <Box
                component="img"
                sx={{
                    height: "auto",
                    width: "100%",
                }}
                alt="The house from the offer."
                src={example}
            />
        </div>
    );
};

export default ExamplePaper;
