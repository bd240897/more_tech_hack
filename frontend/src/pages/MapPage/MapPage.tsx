import React from "react";
import Container from "@mui/material/Container";
import {Box, Button, Drawer} from "@mui/material";
import CustomModal from "./CustomModal/CustomModal";
import CustomDrawer from "@/pages/MapPage/CustomDrawer/CustomDrawer";
import CustomMap from "@/pages/MapPage/CustomMap/CustomMap";
import {menuItemsInit} from "@/common/services";
import TrafficWindow from "@/pages/MapPage/TrafficWindow/TrafficWindow";

type modalDataType = {
    address?: string,
    id?: string,
    allDay?: boolean,
    latitude?: string,
    longitude?: string,
    services?: string,
}

const MapPage = () => {

    // модалка открыта ли
    const [isModal, setIsModal] = React.useState(false);
    // текущие данные для модалки
    const [modalData, setModalData] = React.useState<modalDataType>({});
    // нижнее меню открыто ли
    const [isDrawer, setIsDrawer] = React.useState(false);
    // параметры меню выбраннные (там вкл банкоматы)
    const [menuParams, setMenuParams] = React.useState(menuItemsInit);
    // открыта ли страница трафика
    const [isTraffic, setIsTraffic] = React.useState(false);


    //
    // const CheckCutomModalProps = (modalData: modalDataType) => {
    //     const response = {
    //         address: "empty",
    //         id: "empty",
    //         allDay: false,
    //         latitude: "empty",
    //         longitude: "empty",
    //         services: "empty",
    //     }
    //
    //     if (Object.keys(modalData).length === 0) return response
    //
    //     if (modalData.hasOwnProperty("address")) response["address"] = modalData["address"]!
    //     if (modalData.hasOwnProperty("id")) response["id"]= modalData["id"]!
    //     if (modalData.hasOwnProperty("allDay")) response["allDay"] = modalData["allDay"]!
    //     if (modalData.hasOwnProperty("latitude")) response["latitude"] = modalData["latitude"]!
    //     if (modalData.hasOwnProperty("longitude")) response["longitude"] = modalData["longitude"]!
    //     if (modalData.hasOwnProperty("services")) response["services"] = modalData["services"]!
    //
    //     return response
    // }

    return (
        <>
            <Container>
                <Box sx={{
                    mb: 2,
                    border: "2px solid black",
                    padding: "0px",
                    mt: 2,
                }}
                >
                    <CustomMap
                        setModalData={setModalData}
                        setIsModal={setIsModal}
                        isOffices={menuParams.offices}
                        isAtms={menuParams.atms}
                    />
                </Box>

                <Box sx={{mb: 2}}>

                    {/* ####### Кнопка открытия меню ######## */}

                    <Button fullWidth
                            variant="contained"
                            id="basic-button"
                            aria-controls={isDrawer ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={isDrawer ? 'true' : undefined}
                            onClick={()=>setIsDrawer(true)}
                            sx={{backgroundColor: "secondary.main"}}
                    >
                        Выбор услуги
                    </Button>


                    {/* ####### MODAL ######## */}

                    <CustomModal
                        isModal={isModal}
                        handleClose={() => setIsModal(false)}
                        address={(modalData && "address" in modalData) ? modalData.address as string : "empty"}
                        id={(modalData && "id" in modalData) ? modalData.id as string: "empty"}
                        allDay={(modalData && "allDay" in modalData) ? modalData.allDay as boolean : false}
                        latitude={(modalData && "latitude" in modalData) ? modalData.latitude as string : "empty"}
                        longitude={(modalData && "longitude" in modalData) ? modalData.longitude as string : "empty"}
                        services={(modalData && "services" in modalData) ? modalData.services as string : []}
                    >
                    </CustomModal>

                    {/* ####### DRAWER ######## */}

                    <CustomDrawer
                        isDrawer={isDrawer}
                        setIsDrawer={setIsDrawer}
                        menuParams={menuParams}
                        setMenuParams={setMenuParams}
                        setIsTraffic={setIsTraffic}
                    >
                    </CustomDrawer>



                    <Drawer
                        anchor={'bottom'}
                        open={isTraffic}
                    >
                        <Container>
                            <TrafficWindow setIsTraffic={setIsTraffic}/>
                        </Container>
                    </Drawer>

                </Box>
            </Container>
        </>
    );
};

export default MapPage;
