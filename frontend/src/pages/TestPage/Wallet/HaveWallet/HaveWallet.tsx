import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate} from "react-router-dom";

const Demo = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.background.paper,
}));

const listWallet = [
    1, 2, 3, 4, 5, 6
]

const StyledListItem = styled(ListItem)({
    cursor: "pointer",
    "&$selected": {
        backgroundColor: "red",
        color: "white",
        "& .MuiListItemIcon-root": {
            color: "white"
        }
    },
    "&$selected:hover": {
        backgroundColor: "purple",
        color: "white",
        "& .MuiListItemIcon-root": {
            color: "white"
        }
    },
    "&:hover": {
        backgroundColor: "blue",
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
                <Typography sx={{mt: 4, mb: 2}} variant="h6" component="div">
                    Список счетов
                </Typography>
                <Demo>
                    <List dense={false}>
                        {listWallet.map(element =>
                            <StyledListItem
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete">
                                        <DeleteIcon/>
                                    </IconButton>
                                }
                                key={element}
                                onClick={()=>navigate('/wallet/detail')}
                            >
                                <ListItemAvatar>
                                    <Avatar>
                                        <FolderIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Single-line item"
                                    secondary={"Secondary text"}
                                />
                            </StyledListItem>,
                        )}
                    </List>
                </Demo>
            </Grid>

        </Box>

    );
};

export default HaveWallet;
