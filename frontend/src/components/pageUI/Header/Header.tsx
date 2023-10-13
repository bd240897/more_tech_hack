import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Divider,
    Paper,
    MenuList,
    MenuItem,
    ListItemText,
    ListItemIcon,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import {Link} from "react-router-dom";


const Header = () => {
    return (
<>
        <Box sx={{}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="entry/">entry</Link>
                    </Typography>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="auth/">auth</Link>
                    </Typography>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="list/">list</Link>
                    </Typography>

                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    </>
    );
};

export default Header;
