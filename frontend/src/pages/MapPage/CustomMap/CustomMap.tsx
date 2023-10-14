import React, {useEffect, useState} from "react";
import {YMaps, Map, ObjectManager} from "@pbe/react-yandex-maps";
import {getAtms, getOffices} from "@/api/api";

const config = {
    moscowCoordinates: [
        55.802432,
        37.704547
    ],
    key: "4b243459-9b51-4a12-a835-86fb809f0263"
}

/**
 * Обрабатывает данные для офисов
 */
const prepareOfficesPointData = (offices) => {
    const points = []

    offices.slice().map((el) => // 0, 5
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
 * ! создает нвоый массив без префика atms т.е. это лист
 */
const prepareAtmsPointData = (atms) => {
    const points = []

    atms.atms.slice().map((el) => // 0, 5
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

// const pointsAtms = prepareAtmsPointData(atms)
// const pointsOffices = prepareOfficesPointData(offices)



interface CustomMapProps {
    setModalData:   (value: (((prevState: object) => object) | object)) => void
    setIsModal:  (value: (((prevState: boolean) => boolean) | boolean)) => void
    isAtms: boolean
    isOffices: boolean
}

const CustomMap = ({setModalData, setIsModal, isAtms, isOffices}: CustomMapProps) => {

    console.log("CustomMap| isAtms", isAtms)
    console.log("CustomMap| isAtms", isOffices)


    const [pointsAtms, setPointsAtms] = useState([])
    const [pointsOffices, setPointsOffices] = useState([])

    /**
     * Грузит данные при открытии страницы
     */
    useEffect(() => {
        fetchData()
    }, [])

    /**
     * Грузим данные из апи
     */
    const fetchData = async () => {
        const dataAtms = await getAtms()
        const dataOffices = await getOffices()
        // Promise.all(getAtms(), getOffices())
        if (dataAtms && dataAtms !== null) await setPointsAtms(prepareAtmsPointData(dataAtms))
        if (dataOffices && dataOffices !== null) await setPointsOffices(prepareOfficesPointData(dataOffices))
        console.log("dataAtms", dataAtms)
        console.log("dataOffices", dataOffices)
    }

    /**
     * Ищет данные локации по id и тригерит модальное окно
     * ! ищем в исходном массиве - нужно atms.atms
     */
    const handleOpenModalWithData = (data: any) => {

        console.log("handleOpenModalWithData", data)
        // получим все данные по id
        const foundData = atms.atms.find((el)=>el.id===data.id)
        console.log("foundData", foundData)

        if ("id" in data) {
            setModalData(foundData)
            setIsModal(true);
            console.log(1111, foundData)
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
        features: pointsAtms.map((point) => {
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
        features: pointsOffices.map((point) => {
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
                    clusterCaption: `Метка №${point.id}`,
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
                     height="75vh"
                     state={mapState}
                >
                    {(isAtms & Boolean(pointsAtms.length)) &&
                        <ObjectManager
                            objects={{
                                openBalloonOnClick: true,
                                clusterize: true,
                                gridSize: 32,
                            }}
                            clusters={{}}
                            options={{
                                clusterize: true,
                                gridSize: 64
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
                    }

                    {(isOffices & Boolean(pointsOffices.length)) &&
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
                            // instanceRef={ref => {
                            //     if (ref && "objects" in ref)
                            //         ref.objects.events.add('click', (e) => {
                            //             // Используем айдишник для того, чтобы далее получить инфу по метке
                            //             const objectId = e.get('objectId');
                            //             const data = ref.objects.getById(objectId)
                            //             handleOpenModalWithData(data)
                            //         })
                            // }}
                        />
                    }

                </Map>
            </YMaps>

        </>
    );
};

export default CustomMap;
