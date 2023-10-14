import React from "react";
import Container from "@mui/material/Container";
import {Box, Button} from "@mui/material";
import CustomModal from "./CustomModal/CustomModal";
import CustomDrawer from "@/pages/MapPage/CustomDrawer/CustomDrawer";
import CustomMap from "@/pages/MapPage/CustomMap/CustomMap";

const MapPage = () => {

    // модалка
    const [openModal, setOpenModal] = React.useState(false);
    const [modalData, setModalData] = React.useState({});

    // Drawer
    const [openDrawer, setOpenDrawer] = React.useState(false);

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
                        modalData={modalData}
                        setModalData={setModalData}
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                    />
                </Box>

                <Box sx={{mb: 2}}>
                    {/* ####### Кнопка открытия меню ######## */}

                    <Button fullWidth
                            variant="contained"
                            id="basic-button"
                            aria-controls={openDrawer ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openDrawer ? 'true' : undefined}
                            onClick={()=>setOpenDrawer(true)}
                    >
                        Выбор услуги
                    </Button>


                    {/* ####### MODAL ######## */}

                    <CustomModal
                        open={openModal}
                        handleOpen={() => setOpenModal(true)}
                        handleClose={() => setOpenModal(false)}
                        address={(modalData && "address" in modalData) ? modalData.address : "empty"}
                        id={(modalData && "id" in modalData) ? modalData.id : "empty"}
                    >
                    </CustomModal>

                    {/* ####### DRAWER ######## */}

                    <CustomDrawer
                        state={openDrawer}
                        setState={setOpenDrawer}
                    >
                    </CustomDrawer>

                </Box>
            </Container>
        </>
    );
};

export default MapPage;
