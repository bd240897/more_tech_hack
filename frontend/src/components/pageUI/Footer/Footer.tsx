import React from 'react';
//style
import styles from './Footer.module.sass';
import {Box} from "@mui/material";

interface IFooterProps {
    children?: React.ReactNode;
}

function Footer({className}: IFooterProps) {
    return (
        <>
            <Box sx={{
                backgroundColor: "primary.main",
                border: "2px solid black",
                borderRadius: "2px",
                color: "white",
                textAlign: "center",
                padding: "15px",
                fontWeight: "bold"
            }}>
                <Box className={styles.footer__block}>
                    © 2023 Borisov Dmitrii
                </Box>
            </Box>
        </>
    );
}

export default Footer;
