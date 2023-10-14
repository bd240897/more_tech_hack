import * as React from 'react';
//style
import styles from './ListPaymentsPage.module.sass';

import {
    Box,
    Drawer,
    List,
    ListItem,
    ToggleButton,
    Button,
} from '@mui/material';
import {menuItems} from "@/common/services";
import {styled} from "@mui/material/styles";

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

interface menuParamsType {
    [p: string]: boolean
}

interface CustomDrawerProps {
    isDrawer: boolean,
    setIsDrawer: (value: (((prevState: boolean) => boolean) | boolean)) => void
    menuParams: menuParamsType
    setMenuParams: (value: (((prevState: menuParamsType) => menuParamsType) | menuParamsType)) => void
}

export default function CustomDrawer({
                                         isDrawer = false,
                                         setIsDrawer = () => {
                                         },
                                         menuParams = {offices: false},
                                         setMenuParams = () => {
                                         }
                                     }: CustomDrawerProps) {
    //
    // const [menuParams, setMenuParams] = React.useState({offices: false});

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
    const list = (anchor) => (
        <Box
            sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
            role="presentation"
            // onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >

            {/* сам список ссылоок */}
            <List>
                {menuItems.map((element) => (
                    <ListItem key={element.id} disablePadding sx={{mb: 1}}>
                        <CustomToggleButton
                            value="check"
                            aria-label="left aligned"
                            selected={menuParams[element.name]}
                            key={element.id}
                            onChange={(e) => {
                                setMenuParams(prev => {
                                    return {...prev, [e.target.name]: !prev[e.target.name]}
                                });
                                console.log()
                            }}
                            name={element.name}
                            fullWidth
                            sx={{mx: 2}}
                        >
                            {element.text}
                        </CustomToggleButton>
                    </ListItem>
                ))}
                <ListItem disablePadding sx={{mb: 1}}>
                    <Button
                        value="check"
                        aria-label="left aligned"
                        onClick={()=>{
                            console.log("click")
                            setIsDrawer(false)
                        }}
                        name={"next"}
                        fullWidth
                        sx={{mx: 2, backgroundColor: "secondary.main"}}
                        variant={"contained"}
                    >
                        Далее
                    </Button>
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
