import React from "react";
import {YMaps, Map, ObjectManager} from "@pbe/react-yandex-maps";
import atms from "@/data/atms_fixed.json"
import offices from "@/data/offices.json"

const config = {
    moscowCoordinates: [
        55.802432,
        37.704547
    ],
    key: "4b243459-9b51-4a12-a835-86fb809f0263"
}


const prepareOfficesPointData = (offices) => {
    const points = []

    // TODO ts ignore
    // @ts-ignore
    offices.slice().map((el, index) => // 0, 5
        points.push(
            {
                id: el.id,
                coordinates: [el.latitude, el.longitude],
                title: el.address
            }
        )
    )

    console.log("source prepareOfficesPointData", offices.slice(0, 5))
    console.log("prepared prepareOfficesPointData", points.slice(0, 5))
    return points
}


/**
 * Обрабатывает данные для банкоматов
 * @param atms
 */
const prepareAtmsPointData = (atms) => {
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

    console.log("source prepareAtmsPointData", atms.atms.slice(0, 5))
    console.log("prepare prepareAtmsPointData", points.slice(0, 5))
    return points
}

const points = prepareAtmsPointData(atms)
const pointsOffices = prepareOfficesPointData(offices)



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

    // формируем список точек
    // color icon
    // https://blog.budagov.ru/yandeks-karty-izmenenie-znachka-metki-pri-navedenii-u-spiska-obektov/
    // https://codepen.io/TheFinesse/pen/VMYWmv
    // https://ru.stackoverflow.com/questions/868306/Изменение-цвета-маркера
    const collectionOffices = {
        type: "FeatureCollection",
        features: pointsOffices.map((point, index) => {
            return {
                id: index,
                type: "Feature",
                // тут координаты точки и ее тип
                geometry: {
                    type: "Point",
                    coordinates: point.coordinates
                },
                // тут ставим как выводить карточку -которая всплывает
                properties: {
                    balloonContent: `<div>${point.title} КАРТОЧКА</div>`,
                    clusterCaption: `Метка №${index}`,
                },
                options: {
                    preset: 'islands#greenIcon'
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

                    <ObjectManager
                        objects={{
                            openBalloonOnClick: true,
                            clusterize: true,
                            gridSize: 32,
                        }}
                        clusters={{}}
                        options={{
                            clusterize: true,
                            gridSize: 128,
                            iconImageSize: [10, 10],
                            preset: 'islands#invertedGreenClusterIcons'
                        }}
                        defaultFeatures={collectionOffices}
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
