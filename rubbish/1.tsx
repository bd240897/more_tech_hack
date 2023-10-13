import React from 'react';
import { useYMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const mapState = { center: [55.75, 37.57], zoom: 10 };

const MapComponent = () => {
    const { ymaps } = useYMaps();

    const handleClick = () => {
        const coords = ymaps.getCenter();
        alert(`Координаты: ${coords}`);
    };

    return (
        <Map state={mapState} onClick={handleClick}>
            <Placemark geometry={[55.75, 37.57]} />
        </Map>
    );
};

export default MapComponent;
