import React from 'react';
import {Box} from "@mui/material";
import example from "@/assets/image/example_paper.png"
import ArrayBlock from "@/components/pageUI/ArrayBlock/ArrayBlock";


const PaperExamplePage = () => {
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

export default PaperExamplePage;
