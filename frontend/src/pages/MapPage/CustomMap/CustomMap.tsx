import React from "react";
import {YMaps, Map, ObjectManager} from "@pbe/react-yandex-maps";
import atms from "@/data/atms.json"
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
            id: String(index),
            coordinates: [el.latitude, el.longitude],
            title: el.address
        }
    )
)

console.log(atms.atms.slice(0, 5))
console.log(points)

interface CustomMapProps {
    modalData: any
    setModalData:  (value: (((prevState: {}) => {}) | {})) => void
    openModal: boolean
    setOpenModal:  (value: (((prevState: {}) => {}) | {})) => void
}

const CustomMap = ({modalData, setModalData, openModal, setOpenModal}: CustomMapProps) => {

    const handleOpenModalWithData = (data: any) => {
        if ("id" in data) {
            setModalData({id: data.id, address: "TODO"})
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

        </>
    );
};

export default CustomMap;
