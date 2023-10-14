import React from "react";
import Container from "@mui/material/Container";
import {Box, Button, Switch} from "@mui/material";
import CustomModal from "./CustomModal/CustomModal";
import CustomDrawer from "@/pages/MapPage/CustomDrawer/CustomDrawer";
import CustomMap from "@/pages/MapPage/CustomMap/CustomMap";

const MapPage = () => {

    // модалка открыта ли
    const [isModal, setIsModal] = React.useState(false);
    // банкоматы показаны ли
    const [isAtms, setIsAtms] = React.useState(true);
    // текущие данные для модалки
    const [modalData, setModalData] = React.useState({});
    // нижнее меню открыто ли
    const [isDrawer, setIsDrawer] = React.useState(false);

    return (
        <>
            <Container>
                <Box sx={{
                    mb: 2,
                    border: "2px solid black",
                    padding: "15px",
                    mt: 2,
                }}
                >
                    <CustomMap
                        setModalData={setModalData}
                        setIsModal={setIsModal}
                        isAtms={isAtms}
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
                    >
                        Выбор услуги
                    </Button>


                    {/* ####### MODAL ######## */}

                    <CustomModal
                        isModal={isModal}
                        handleClose={() => setIsModal(false)}
                        address={(modalData && "address" in modalData) ? modalData.address : "empty"}
                        id={(modalData && "id" in modalData) ? modalData.id : "empty"}
                        allDay={(modalData && "allDay" in modalData) ? modalData.allDay : "empty"}
                        latitude={(modalData && "latitude" in modalData) ? modalData.latitude : "empty"}
                        longitude={(modalData && "longitude" in modalData) ? modalData.longitude : "empty"}
                        services={(modalData && "services" in modalData) ? modalData.services : []}
                    >
                    </CustomModal>

                    {/* ####### DRAWER ######## */}

                    <CustomDrawer
                        isDrawer={isDrawer}
                        setIsDrawer={setIsDrawer}
                    >
                    </CustomDrawer>


                    <Switch defaultChecked onClick={(event)=>setIsAtms(event.target.checked)}/>
                </Box>
            </Container>
        </>
    );
};

export default MapPage;
