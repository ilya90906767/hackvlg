import { useEffect, useState, useContext } from 'react';
import React from 'react';
import { load } from '@2gis/mapgl';
import {RouteContext} from '../contexts/geocodeContext'

export const Map = () => {
    const apiKey = '59e2dcbb-0312-4a54-96be-6b683a17331d';



    const MapWrapper = React.memo(
        () => {
            return <div id="map-container" style={{ width: '100%', height: '100%' }}></div>;
        },
        () => true,
    );
          

    useEffect(() => {
        let map;
        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [44.51820573095013, 48.71073729295477],
                zoom: 15,
                key: apiKey,
            });

            const marker = new mapglAPI.Marker(map, {
                coordinates: [44.51820573095013, 48.71073729295477],
            });


        });

        // Удаляем карту при размонтировании компонента
        return () => map && map.destroy();
    }, []);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <MapWrapper />
        </div>
    );
};

export default Map;