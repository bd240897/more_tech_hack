import React, {useRef} from "react";
import {YMaps, Map, ObjectManager, Placemark, Polygon} from "@pbe/react-yandex-maps";
import atms from "../../data/atms.json"
import MapComponent from "@/pages/MapPage/1";
import Container from "@mui/material/Container";

const coordConfig = {
    moscowCoordinates: [
        55.802432,
        37.704547
    ],
    key: "4b243459-9b51-4a12-a835-86fb809f0263"
}

const points = []
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

//
// const points = [
//     {
//         id: "1",
//         coordinates: [61.703602, 30.680139],
//         title: "Железнодорожная станция"
//     },
//     {
//         id: "2",
//         coordinates: [61.699623, 30.690952],
//         title: "Пристань Метеоров"
//     },
//     {
//         id: "3",
//         coordinates: [61.705707, 30.672616],
//         title: "Парк Ваккасалми"
//     }
// ];


const MapYa = () => {
    const [aItem, setAitem] = React.useState(points);

    const mapRef = useRef()

    // исходные параметры карты
    const mapState = {
        center: coordConfig.moscowCoordinates,
        zoom: 15.4,
        behaviors: ["default", "scrollZoom"]
    };

    const collection = {
        type: "FeatureCollection",
        features: aItem.map((point, id) => {
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

    // ref.myRef.get({
    //     provider: 'yandex',
    //     mapStateAutoApply: true
    // })

    //
    // useEffect(() => {
    //     const geocoder = new window.ymaps.geocode('Мытищи');
    //
    //     geocoder.then((res) => {
    //         const coordinates = res.geoObjects.get(0).geometry.getCoordinates();
    //         console.log(coordinates);
    //     });
    // }, []);

    return (
        <>
            <Container>
            <YMaps
                enterprise
                query={{
                    apikey: coordConfig.key,
                }}>

                <Map width="100%"
                     height="100vh"
                     state={mapState}
                    // query={{
                    //     load: "package.full",
                    //     apikey: coordConfig.key
                    // }}
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
                        instanceRef={ref =>
                            ref.objects.events.add('click', (e) => {
                                // Используем айдишник для того, чтобы далее получить инфу по метке
                                const objectId = e.get('objectId');
                                console.log(ref.objects.getById(objectId))
                            })

                            // mapRef.myRef = ref
                            // console.log(1111, ref)


                            //
                            // ref.objects.events.add('click', (e) => {
                            //     // Используем айдишник для того, чтобы далее получить инфу по метке
                            //     e.get({
                            //         provider: 'yandex',
                            //         mapStateAutoApply: true
                            //     }).then(function (result) {
                            //         // Красным цветом пометим положение, вычисленное через ip.
                            //         result.geoObjects.options.set('preset', 'islands#redCircleIcon');
                            //         result.geoObjects.get(0).properties.set({
                            //             balloonContentBody: 'Мое местоположение'
                            //         });
                            //         console.log(1111, result.geoObjects)
                            //     })
                            // })


                            // mapRef.myRef = ref


                            //
                            // ref.objects.get({
                            //     provider: 'yandex',
                            //     mapStateAutoApply: true
                            // }).then(function (result) {
                            //     console.log(result)
                            // })


                        }
                    />

                    {/*<Polygon*/}
                    {/*    instanceRef={(ref) => this.polygonInst = ref}*/}
                    {/*    geometry={[61.702423, 30.688193]}*/}
                    {/*    options={{ visible: false }}*/}
                    {/*/>*/}

                    {/*console.log(this.polygonInst.geometry.getClosest(this.state.marker))*/}
                    {/*<Clusterer*/}
                    {/*    options={{*/}
                    {/*        preset: "islands#invertedVioletClusterIcons",*/}
                    {/*        groupByCoordinates: false,*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    {points.map((el, index) => (*/}
                    {/*        <Placemark key={index} geometry={el.coordinates} />*/}
                    {/*    ))}*/}
                    {/*</Clusterer>*/}

                </Map>
            </YMaps>
            </Container>
        </>
    );
};

export default MapYa;
//
// import {useState} from "react";
//
// const App = (props) => {
//     const [ addressName, setAddressName ] = useState(false);
//
//     const getCoords = e => {
//         window.ymaps.geocode(e.get('coords')).then(res => {
//             let firstGeoObject = res.geoObjects.get(0);
//             setAddressName(firstGeoObject.getAddressLine())
//         })
//
//     };
//     const mapState = {
//         center: [41.3110, 69.2405],
//         zoom: 13
//     };
//
//     return (
//         <div>
//             <YMaps query={{
//                 apikey: '0e2aab77-993e-4282-a199-bcbafd4fb7f9\n',
//                 ns: "ymaps",
//             }}>
//                 <Map
//                     state = {mapState}
//                     modules= {["geolocation", "geocode"]}
//                     onClick={e => getCoords(e)}
//                 >
//                     <Placemark
//                         geometry={{
//                             type: 'Point',
//                             coordinates: [],
//                         } }
//                         properties={{
//                             iconContent: addressName,
//                         }}
//                         options={{
//                             preset: 'islands#blackStretchyIcon',
//                         }}
//                     />
//                 </Map>
//             </YMaps>
//             <div>
//             </div>
//         </div>
//     )
// };
//
// export default App;
