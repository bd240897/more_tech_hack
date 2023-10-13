import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
    MenuItem,
    Tooltip,
    Avatar,
    Menu,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import {Link} from "react-router-dom";
import {Key, useState} from "react";


const myPages = [{name: 'Login', link: "/"}, {name: 'Map', link: "/map"}, {name: 'About', link: "/about"}, ];
const mySettings = ['Profile', 'Account', 'Logout'];

const Header = () => {

    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenSettingsMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseSettingsMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <>
            <AppBar position="static">
                <Toolbar>

                    <MenuIcon/>

                    <Typography
                        variant="h5"
                        noWrap
                        component={Link}
                        to={"/"}
                        sx={{
                            mr: 2,
                            fontWeight: 200,
                            fontFamily: 'roboto',
                            color: 'white',
                            letterSpacing: '.2rem',
                            textDecoration: 'none',
                        }}
                    >
                        Educative
                    </Typography>

                    <Box sx={{flexWrap: 'wrap', flexGrow: 1, display: 'flex'}}>
                        {myPages.map((page) => (
                            <Button
                                key={page as Key}
                                component={Link} to={page.link}
                                sx={{my: 2, color: 'white', display: 'block', textDecoration: "none"}}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Open my_settings">
                            <IconButton onClick={handleOpenSettingsMenu} sx={{p: 0}}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '55px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseSettingsMenu}
                        >
                            {mySettings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseSettingsMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>

        </>
    );
};

export default Header;
