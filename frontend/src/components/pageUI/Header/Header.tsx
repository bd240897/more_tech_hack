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
import React, {Key, MouseEventHandler, SetStateAction, useState} from "react";
import {pages} from "@/common/services";

import headerImage from "./images/header_icon.png"

interface IHeaderProps {
    children?: React.ReactNode;
    className?: string
}

const Header = ({className}:IHeaderProps) => {

    const [anchorElUser, setAnchorElUser] = useState<null>(null);


    const handleOpenSettingsMenu = (event: any) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseSettingsMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <>
            <AppBar position="static" className={className!}>
                <Toolbar sx={{justifyContent: "space-between"}}>

                    {/* меню бургер */}
                    <Box display={{xs: "block", lg: "none"}}>
                        <Tooltip title="список страниц">
                            <IconButton onClick={handleOpenSettingsMenu} sx={{p: 0}}>
                                {/*<MenuIcon color={"secondary"}/>*/}
                                <Box component="img" src={headerImage} sx={{py:2}}/>
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
                            {pages.map((page) => (
                                <MenuItem
                                    onClick={handleCloseSettingsMenu}
                                    key={page.name as Key}
                                    component={Link} to={page.link}
                                >
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>

                    </Box>

                    {/* Имя приложения */}
                    <Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component={Link}
                            to={"/"}
                            sx={{
                                mr: 4,
                                fontWeight: 200,
                                // fontFamily: 'roboto',
                                color: 'white',
                                // letterSpacing: '.2rem',
                                textDecoration: 'none',
                            }}
                        >
                            Втб комуналка
                        </Typography>
                    </Box>

                    {/* обычное меню */}
                    <Box sx={{flexWrap: {xs: 'nowrap', md: 'wrap'}, flexGrow: {xs: 0, md: 1}}}
                         display={{xs: "none", lg: "flex"}}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page.name as Key}
                                component={Link} to={page.link}
                                sx={{my: 2, color: 'white', display: 'block', textDecoration: "none"}}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{flexGrow: 0}}>

                        <Tooltip title="Твоя фотка красавчeк!">
                            <IconButton sx={{p: 0}}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </AppBar>

        </>
    );
};

export default Header;
