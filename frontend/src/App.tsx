import './App.sass'

import {Route, Routes} from "react-router-dom";

import * as React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {colors} from "@mui/material";

// pages
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import EntryPage from "@/pages/EntryPage/EntryPage";
import AboutPage from "@/pages/AboutPage/AboutPage";
import CreateWalletPage from "@/pages/CreateWalletPage/CreateWalletPage";
import WalletLayout from "@/layouts/WalletLayout/WalletLayout";
import PaperExamplePage from "@/pages/PaperExamplePage/PaperExamplePage";
import WalletPage from "@/pages/WalletPage/WalletPage";
import DetailWalletPage from "@/pages/DetailWalletPage/DetailWalletPage";


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
                                <Route path="/about" element={<AboutPage/>}/>

                                <Route path="/wallet" element={<WalletLayout/>}>
                                    <Route index element={<WalletPage/>}/>
                                    <Route path="create" element={<CreateWalletPage/>}/>
                                    <Route path="example" element={<PaperExamplePage/>}/>
                                    <Route path="detail" element={<DetailWalletPage/>}/>
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
