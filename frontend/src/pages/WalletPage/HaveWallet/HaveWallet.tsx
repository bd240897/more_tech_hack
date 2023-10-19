import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router-dom";
import AddHomeIcon from '@mui/icons-material/AddHome';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import PaymentsIcon from '@mui/icons-material/Payments';
import {listWallet} from "@/common/services";

const getIconList = (type: string) => {
    if (type === "home")
        return  <AddHomeIcon/>
    else if (type === "gas")
        return  <AddHomeIcon/>
    else if (type === "water")
        return  <WaterDropIcon/>
    else
        return  <OtherHousesIcon/>
}

const Demo = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.background.paper,
}));

const StyledListItem = styled(ListItem)({
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "gray",
        color: "white",
        "& .MuiListItemIcon-root": {
            color: "white"
        }
    }
});

const HaveWallet = () => {

    const navigate = useNavigate();

    return (
        <Box>
            <Grid item xs={12} md={6}>

                <Typography sx={{mt: 4, mb: 2}} variant="h3" align={"center"} component="div">
                    Список счетов
                </Typography>


                <Demo>
                    <List dense={false}>
                        {listWallet.map(element =>
                            <StyledListItem
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete">
                                        <PaymentsIcon sx={{color: element.status === "expired" ? "red" : "green"}}/>
                                    </IconButton>
                                }
                                key={element.id}
                                onClick={() => navigate('/wallet/detail')}
                            >
                                <ListItemAvatar>
                                    <Avatar>
                                        {getIconList(element.type)}
                                    </Avatar>
                                </ListItemAvatar>

                                <ListItemText
                                    primary={element.id}
                                    secondary={element.name}
                                >
                                    {element.name}
                                </ListItemText>
                            </StyledListItem>,
                        )}
                    </List>
                </Demo>
            </Grid>

        </Box>

    );
};

export default HaveWallet;
