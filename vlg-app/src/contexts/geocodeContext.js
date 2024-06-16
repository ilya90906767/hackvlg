import {createContext, useRef, useState} from 'react';
import {load} from "@2gis/mapgl";
import {Directions} from "@2gis/mapgl-directions";
import { apiKey} from "../api";

const RouteContext = createContext();

const RouteProvider = ({ children }) => {

    const mapRef = useRef(null);
    const directionsRef = useRef(null);
    const mapglAPIRef = useRef(null);

    const points = useRef([] );

    const markers = useRef ([] );

    const initMap = ()=>{

        load().then( (mapglAPILoaded) => {
            mapRef.current = new mapglAPILoaded.Map('map-container', {
                center: [44.51820573095013, 48.71073729295477],
                zoom: 15,
                key: apiKey,
            });

            const marker = new mapglAPILoaded.Marker(mapRef.current, {
                coordinates: [44.51820573095013, 48.71073729295477],
            });

            const directions = new Directions(mapRef.current, {
                directionsApiKey: apiKey,
            });

            mapRef.current.on('click', mapClick);

            mapglAPIRef.current = mapglAPILoaded;
            directionsRef.current = directions;
        });
    }

    const addPoint = (newPoint) => {
        points.current = [...points.current, newPoint];
    };

    const addMarker =  ( coords ) => {

        const newMarker = new mapglAPIRef.current.Marker(mapRef.current, {
            coordinates: coords,
            icon: 'https://docs.2gis.com/img/dotMarker.svg',
        });

        markers.current = [...markers.current, newMarker];
    };

    const drawRoute = ()=>{
        if ( points.current.length > 1 ) {
            directionsRef.current.pedestrianRoute({ points: points.current });
            clearMarkers();
        }
    }

    const clearMarkers = ()=>{
        markers.current.forEach((m) => {
            m.destroy();
        });
    }

    const addPointFromAddress = (coords) => {
        console.log( 'addPointFromAddress')
        addMarker(coords);
        addPoint(coords);
        drawRoute();
    };

    const removeLastPoint = () => {
        console.log( 'removeLastPoint')

        points.current.pop();
        markers.current.pop().destroy();
        drawRoute();
    };

    const clearPoints = () => {
        console.log( ' clearPoints');

        clearMarkers();
        points.current = [ ];
        directionsRef.current.clear();
    };

    const mapClick = ( e ) => {
        console.log( ' click');

        const coords = e.lngLat;

        addMarker(coords);
        addPoint( coords );
        drawRoute();

    };

   return (
    <RouteContext.Provider value={{ mapRef, addPoint, removeLastPoint, clearPoints, initMap, mapClick, addPointFromAddress, points}}>
      {children}
    </RouteContext.Provider>
  );
};

export { RouteProvider, RouteContext };