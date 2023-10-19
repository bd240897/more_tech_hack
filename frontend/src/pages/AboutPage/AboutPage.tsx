import React from 'react';
import {Box, Container, Grid, Stack, Typography} from "@mui/material";

const AboutPage = () => {
    return (
        <>
            <Container sx={{height: "100%"}}>
                <Stack sx={{my: 3, height: "100%"}} direction={"column"} alignItems={"center"}
                     justifyContent={"center"}>

                    <Box sx={{width: "80%"}}>
                        <Grid container sx={{mb:2}}>
                            <Grid item xs={12} sm={4} textAlign={"center"}>
                                <Typography variant={"h6"} fontWeight={"bold"}>Команда: </Typography>
                            </Grid>
                            <Grid item xs={12} sm={8} textAlign={"center"}>
                                <Typography variant={"h6"}>Win+ners </Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} sm={4}  textAlign={"center"}>
                                <Typography variant={"h6"} fontWeight={"bold"}>Проект на хакатон: </Typography>
                            </Grid>
                            <Grid item xs={12} sm={8} textAlign={"center"}>
                                <Typography variant={"h6"}>VTB API 2023 </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Stack>
            </Container>
        </>
    );
};

export default AboutPage;
