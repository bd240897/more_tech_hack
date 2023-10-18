import React from 'react';
import {Box, Chip, Divider, Grid, IconButton, Typography} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {Link as RouterLink} from "react-router-dom";
import Link, {LinkProps} from '@mui/material/Link';

interface IArrayBlock {
    text?: string,
    link?: string
}


const styles = {
    box: {
        background: "#f1f1f1",
        '&:hover': {
            background: "#f00",
        }
    }
};

const ArrayBlock = ({text = "", link = ""}: IArrayBlock) => {
    return (
        <Link component={RouterLink} to={link} sx={{textDecoration: "none", color: "black"}} >
            <Box sx={{py: 3}}>

                <Grid container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      sx={{py: 3, '&:hover': {background: "#fdff8f"}, borderRadius: 3}}
                >
                    <Grid item xs={4}>
                        <Box sx={{ml: 2}}>
                            <IconButton aria-label="delete" size="large" sx={{border: "2px solid black"}}>
                                <ArrowBackIcon fontSize="inherit"/>
                            </IconButton>
                        </Box>
                    </Grid>

                    <Grid item xs={8}>
                        <Typography sx={{fontSize: 30}}>
                            {text}
                        </Typography>
                    </Grid>

                </Grid>

                <Divider>
                    <Chip label="CHIP" color={"secondary"}/>
                </Divider>
            </Box>
        </Link>
    );
};

export default ArrayBlock;
