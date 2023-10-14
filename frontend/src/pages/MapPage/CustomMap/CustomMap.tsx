import React from "react";
import {YMaps, Map, ObjectManager} from "@pbe/react-yandex-maps";
import atms from "@/data/atms_fixed.json"
import {Box} from "@mui/material";

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
            id: el.id,
            coordinates: [el.latitude, el.longitude],
            title: el.address
        }
    )
)

console.log("sourcedPoints", atms.atms.slice(0, 5))
console.log("preparedPoints", points.slice(0, 5))

interface CustomMapProps {
    modalData: any
    setModalData:  (value: (((prevState: {}) => {}) | {})) => void
    openModal: boolean
    setOpenModal:  (value: (((prevState: {}) => {}) | {})) => void
}

const CustomMap = ({modalData, setModalData, openModal, setOpenModal}: CustomMapProps) => {

    const handleOpenModalWithData = (data: any) => {

        console.log("handleOpenModalWithData", data)

        // получим все данные по id
        const foundData = atms.atms.find((el)=>el.id===data.id)
        console.log("foundData", foundData)

        if ("id" in data) {
            setModalData(foundData)
            setOpenModal(true);
        }
    }

    // исходные параметры карты
    const mapState = {
        center: config.moscowCoordinates,
        zoom: 15.4,
        behaviors: ["default", "scrollZoom"]
    };

    // формируем список точек
    const collection = {
        type: "FeatureCollection",
        features: points.map((point) => {
            return {
                id: point.id,
                type: "Feature",
                // тут координаты точки и ее тип
                geometry: {
                    type: "Point",
                    coordinates: point.coordinates
                },
                // тут ставим как выводить карточку -которая всплывает
                properties: {
                    balloonContent: `<div>${point.title} КАРТОЧКА</div>`,
                    clusterCaption: `Метка №${point.id}`
                }
            };
        })
    };

    return (
        <>

            <YMaps
                enterprise
                query={{
                    apikey: config.key,
                }}>

                <Map width="100vw"
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
                                })
                        }}
                    />
                </Map>
            </YMaps>

        </>
    );
};

export default CustomMap;
