import {useEffect, useState, useContext, useRef} from 'react';
import React from 'react';

import {RouteContext} from '../contexts/geocodeContext'

export const Map = () => {

    const { initMap, mapRef } = useContext( RouteContext );

    const MapWrapper = React.memo(
        () => {
            return <div id="map-container" style={{ width: '100%', height: '100%' }}></div>;
        },
        () => true,
    );

    useEffect(  () => {
        initMap();
        // Удаляем карту при размонтировании компонента
        return () => mapRef.current && mapRef.current.destroy();
    }, []);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <MapWrapper />
        </div>
    );
};

export default Map;