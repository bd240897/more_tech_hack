import * as React from 'react';
//style
import styles from './ListPaymentsPage.module.sass';

import {
    Box,
    Drawer,
    Button,
    List,
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText, ToggleButton,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {services, servicesFromData} from "@/common/services";
import {styled} from "@mui/material/styles";

type Anchor = 'top' | 'left' | 'bottom' | 'right';


interface CustomDrawerProps {
    isDrawer: boolean,
    setIsDrawer: (value: (((prevState: boolean) => boolean) | boolean)) => void
}

const CustomToggleButton = styled(ToggleButton)({
    backgroundColor: 'white',
    "&.Mui-selected": {
        color: "white",
        backgroundColor: '#0564f3'
    },
    "&.Mui-selected:hover": {
        color: "white",
        backgroundColor: '#6a6a6a'
    }
});

export default function CustomDrawer({isDrawer = false, setIsDrawer = () => {}}: CustomDrawerProps) {

    const [isToggleButton, setIsToggleButton] = React.useState(false);

    /**
     * Переключает вкл и выкл меню
     * anchor - привязка = 'top' | 'left' | 'bottom' | 'right'
     * таб + шифт - это премещение по меню
     */
    const toggleDrawer = (open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setIsDrawer(open);
        };

    /**
     * Тут чисто список
     */
    const list = (anchor: Anchor) => (
        <Box
            sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
            role="presentation"
            // onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >

            {/* сам список ссылоок */}
            <List>
                {servicesFromData.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Divider/>

            {/* сам список ссылоок */}
            <List>
                {services.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItemButton>
                    </ListItem>
                ))}
                {/* TODO make buttons */}
                <ListItem key={111111} disablePadding>
                    <CustomToggleButton
                        value="check"
                        aria-label="left aligned"
                        selected={isToggleButton}
                        onChange={() => {
                            setIsToggleButton(!isToggleButton);
                        }}
                        fullWidth
                        sx={{mx: 2}}
                    >
                            2222222

                    </CustomToggleButton>
                </ListItem>
            </List>

        </Box>
    );

    return (
        <div>
            <>

                {/*<Button onClick={toggleDrawer(true)}>Кнопка</Button>*/}

                <Drawer
                    anchor={'bottom'}
                    open={isDrawer}
                    onClose={toggleDrawer(false)}
                    // onClick={event=>event.stopPropagation()}
                >
                    {list('bottom')}
                </Drawer>

            </>
        </div>
    );
}
