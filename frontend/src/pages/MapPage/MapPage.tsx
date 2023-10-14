import React from "react";
import {YMaps, Map, ObjectManager} from "@pbe/react-yandex-maps";
import atms from "@/data/atms.json"
import Container from "@mui/material/Container";
import {Box, Button} from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CustomModal from "./CustomModal/CustomModal";
import CustomDrawer from "@/pages/MapPage/CustomDrawer/CustomDrawer";

const config = {
    moscowCoordinates: [
        55.802432,
        37.704547
    ],
    key: "4b243459-9b51-4a12-a835-86fb809f0263"
}

const points = []

// TODO ts ignore
// @ts-ignore
atms.atms.slice().map((el, index) => // 0, 5
    points.push(
        {
            id: String(index),
            coordinates: [el.latitude, el.longitude],
            title: el.address
        }
    )
)

console.log(atms.atms.slice(0, 5))
console.log(points)


const MapYa = () => {

    // модалка
    const [openModal, setOpenModal] = React.useState(false);
    const [modalData, setModalData] = React.useState({});
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    const handleOpenModalWithData = (data: any) => {
        if ("id" in data) {
            setModalData({id: data.id, address: "TODO"})
            setOpenModal(true);
        }
    }

    // Drawer
    const [openDrawer, setOpenDrawer] = React.useState(false);

    // фишки для меню
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // исходные параметры карты
    const mapState = {
        center: config.moscowCoordinates,
        zoom: 15.4,
        behaviors: ["default", "scrollZoom"]
    };

    // формируем список точек
    const collection = {
        type: "FeatureCollection",
        features: points.map((point, id) => {
            return {
                id: id,
                type: "Feature",
                // тут координаты точки и ее тип
                geometry: {
                    type: "Point",
                    coordinates: point.coordinates
                },
                // тут ставим как выводить карточку -которая всплывает
                properties: {
                    balloonContent: `<div>${point.title} КАРТОЧКА</div>`,
                    clusterCaption: `Метка №${id + 1}`
                }
            };
        })
    };

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
                    <YMaps
                        enterprise
                        query={{
                            apikey: config.key,
                        }}>

                        <Map width="100%"
                             height="100vh"
                             state={mapState}
                        >
                            {/*<Placemark geometry={[61.702423, 30.688193]} onClick={(e)=>console.log(e)}/>*/}
                            <ObjectManager
                                objects={{
                                    openBalloonOnClick: true,
                                    clusterize: true,
                                    gridSize: 32,
                                }}
                                clusters={{}}
                                options={{
                                    clusterize: true,
                                    gridSize: 128
                                }}
                                defaultFeatures={collection}
                                modules={[
                                    "objectManager.addon.objectsBalloon",
                                    "objectManager.addon.clustersBalloon"
                                ]}
                                instanceRef={ref => {
                                    if (ref && "objects" in ref)
                                        ref.objects.events.add('click', (e) => {
                                            // Используем айдишник для того, чтобы далее получить инфу по метке
                                            const objectId = e.get('objectId');
                                            const data = ref.objects.getById(objectId)
                                            handleOpenModalWithData(data)
                                            console.log(data)
                                        })
                                }}
                            />
                        </Map>
                    </YMaps>
                </Box>

                <Box sx={{mb: 2}}>
                    <Button fullWidth
                            variant="contained"
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={()=>setOpenDrawer(true)}
                    >
                        Выбор услуги
                    </Button>

                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Кредит</MenuItem>
                        <MenuItem onClick={handleClose}>Депозит</MenuItem>
                        <MenuItem onClick={handleClose}>Что то еще</MenuItem>
                    </Menu>

                    {/* ####### MODAL ######## */}
                    {/* TOTO de;ete open modal*/}
                    {/*<Button onClick={handleOpenModal}>Open modal</Button>*/}
                    <CustomModal
                        open={openModal}
                        handleOpen={handleOpenModal}
                        handleClose={handleCloseModal}
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

export default MapYa;
