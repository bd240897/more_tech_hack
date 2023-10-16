import React from 'react';
import {Box, Chip, Divider, Grid, IconButton, Typography} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ArrayBlock = () => {
    return (

        <Box sx={{p:3}}>
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
            >
                <Grid item xs={4}>
                    <Box>
                        <IconButton aria-label="delete" size="large" sx={{border: "2px solid black"}}>
                            <ArrowBackIcon fontSize="inherit"/>
                        </IconButton>
                    </Box>
                </Grid>

                <Grid item xs={8}>
                    <Typography>
                        Добавление лицевого счета
                    </Typography>
                </Grid>

            </Grid>
            <Divider>
                <Chip label="CHIP" color={"secondary"}/>
            </Divider>
        </Box>
    );
};

export default ArrayBlock;
