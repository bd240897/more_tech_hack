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
import {ReactNode} from "react";

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
    setIsTraffic: (value: (((prevState: boolean) => boolean) | boolean)) => void
    children? : ReactNode
}


export default function CustomDrawer({isDrawer = false,
                                         setIsDrawer = () => {},
                                         menuParams = {offices: false},
                                         setMenuParams = () => {},
                                         setIsTraffic = () => {}
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
    const list = () => (
        <Box
            sx={{width: 'auto'}}
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
                            onChange={(event) => {
                                const { name } = event.target as HTMLButtonElement;
                                setMenuParams(prev => {
                                    return {...prev, [name]: !prev[name]}
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
                            setIsTraffic(true)
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
                <Drawer
                    anchor={'bottom'}
                    open={isDrawer}
                    onClose={toggleDrawer(false)}
                >
                    {list()}
                </Drawer>

            </>
        </div>
    );
}
