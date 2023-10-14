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
    ListItemText,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {services, servicesFromData} from "@/common/services";

type Anchor = 'top' | 'left' | 'bottom' | 'right';


interface СustomDrawerProps {
    state?: boolean,
    setState?: ()=>void
}

export default function СustomDrawer() {

    // стейт открыт ли или нет
    const [state, setState] = React.useState(false);


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

            setState(open);
        };

    /**
     * Тут чисто список
     */
    const list = (anchor: Anchor) => (
        <Box
            sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
            role="presentation"
            onClick={toggleDrawer(false)}
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
            </List>

        </Box>
    );

    return (
        <div>
            <>

                <Button onClick={toggleDrawer(true)}>Кнопка</Button>

                <Drawer
                    anchor={'bottom'}
                    open={state}
                    onClose={toggleDrawer(false)}
                >
                    {list('bottom')}
                </Drawer>

            </>
        </div>
    );
}
