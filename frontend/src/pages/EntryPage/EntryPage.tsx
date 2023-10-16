import {
    Container,
    useTheme,
    AppBar,
    Tabs,
    Tab,
    Box,
    TabsProps,
} from '@mui/material';

import * as React from 'react';
import style from "./EntryPage.module.sass"

import {styled} from '@mui/material/styles';

import Register from "./Register/Register";
import Login from "./Login/Login";

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}


/**
 * Таб списка пеерключений
 */
function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    {children}
                </Box>
            )}
        </div>
    );
}

// TODO unused theme
const TabsCustom = styled(Tabs)<TabsProps>(({theme}) => ({
    backgroundColor: "white",
    "& .MuiPaper-root": {
        boxShadow: "none",
    }
}));


function EntryPage() {
    const theme = useTheme();

    // текущий таб
    const [value, setValue] = React.useState(0);

    /**
     * Установить текщий таб (апп бар)
     */
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    return (
        <Container maxWidth="sm" sx={{height: "100%", py: "0", my: "0"}}>
            <Box className={style.root}>
                <AppBar position="static" sx={{boxShadow: "none"}}>
                    <TabsCustom
                        value={value}
                        onChange={handleChange}
                        // indicatorColor="white"
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                        sx={{width: "100%"}}
                    >
                        <Tab label="Вход"
                             sx={{
                                 backgroundColor: "#000743",
                                 borderTopLeftRadius: "30px",
                                 borderTopRightRadius: "30px",
                                 borderWidth: 0,
                                 boxShadow: "none"
                             }}
                             tabIndex={0}
                        />

                        <Tab label="Регистрация" sx={{
                            backgroundColor: "#000743",
                            borderTopLeftRadius: "30px",
                            borderTopRightRadius: "30px",
                        }}
                             tabIndex={1}
                        />
                    </TabsCustom>
                </AppBar>

                <Box sx={{backgroundColor: "#000743", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px", width: "100%"}}>
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <Login setTabRegister={() => setValue(1)}/>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <Register setTabLogin={() => setValue(0)}/>
                    </TabPanel>
                </Box>
            </Box>
        </Container>

    );
}


export default EntryPage;
