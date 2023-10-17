import './App.sass'

import {Route, Routes} from "react-router-dom";

import * as React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {colors} from "@mui/material";

// pages
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import MapPage from "@/pages/MapPage/MapPage";
import EntryPage from "@/pages/EntryPage/EntryPage";
import AboutPage from "@/pages/AboutPage/AboutPage";
import CreateWallet from "@/pages/TestPage/CreateWallet/CreateWallet";
import WalletLayout from "@/layouts/WalletLayout/WalletLayout";
import ExamplePaper from "@/pages/TestPage/ExamplePaper/ExamplePaper";
import Wallet from "@/pages/TestPage/Wallet/Wallet";
import DetailWallet from "@/pages/TestPage/DetailWallet/DetailWallet";


// theme


// const { palette } = createTheme();
// const theme = createTheme({
//     palette: {
//         primary: {
//             main: "#2a9461"
//         },
//         secondary: {
//             main: "#494c7d"
//         },
//         companyRed: {
//             main: "#E44D69",
//             contrastText: "#000",
//         },
//     }
// });

// interface IPalette extends Palette {
//     xxx: {}
// }
// interface ITheme extends Theme {
//     palette: IPalette;
// }
// interface IThemeOptions extends ThemeOptions {
//     palette: IPalette;
// }

// const theme = createTheme({
//     palette: {
//         primary: { dark: '#f50057' as React.CSSProperties['color'] },
//     }
// });


// TODO ts ignore
// @ts-ignore
const theme = createTheme({
    status: {
        danger: '#e53e3e'
    },
    palette: {
        secondary: {
            main: colors.orange[500]
        },
        neutral: {
            main: "#555555",
            darker: colors.grey[700]
        }
    }
})

import {UserContext} from "@/context/WalletExists/WalletExists";


const App = () => {

    const [isWallet, setIsWallet] = React.useState(false);

    return (
        <>
            <UserContext.Provider value={{value: isWallet, setValue: setIsWallet}}>
                <ThemeProvider theme={theme}>
                    <div>
                        <Routes>
                            <Route path="/" element={<MainLayout/>}>
                                <Route index element={<EntryPage/>}/>
                                <Route path="/map" element={<MapPage/>}/>
                                <Route path="/about" element={<AboutPage/>}/>

                                <Route path="/wallet" element={<WalletLayout/>}>
                                    <Route index element={<Wallet/>}/>
                                    <Route path="create" element={<CreateWallet/>}/>
                                    <Route path="example" element={<ExamplePaper/>}/>
                                    <Route path="detail" element={<DetailWallet/>}/>
                                </Route>


                                <Route path="*" element={<NotFoundPage/>}/>
                            </Route>
                        </Routes>
                    </div>
                </ThemeProvider>
            </UserContext.Provider>
        </>
    );
};

export default App;
