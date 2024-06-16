import React, {useState, useContext} from 'react';
import './Search2GIS.css'
import Autosuggest from 'react-autosuggest';
import {RouteContext, RouteProvider} from "../contexts/geocodeContext";
import {apiKey} from "../api";

const Search2GIS = () => {
    const {mapRef, mapglAPIRef, addPointFromAddress} = useContext(RouteContext);
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const getSuggestions = async (value) => {
        if (value.length <= 2) {
            return [];
        }

        // const response = await fetch(`https://catalog.api.2gis.ru/3.0/items?q=${value}&key=${apiKey}&type=address&region_id=your-region-id`);
        // const response = await fetch(`https://catalog.api.2gis.com/3.0/suggests?q=${value}&suggest_type=route_endpoint&sort_point=44.51820573095013,48.710737292954776&key=${apiKey}&fields=items.point`);
        const response = await fetch(`https://catalog.api.2gis.com/3.0/suggests?q=${value}&suggest_type=address&sort_point=44.51820573095013,48.710737292954776&key=${apiKey}&fields=items.point`);
        const data = await response.json();
        return data.result?.items ?? [];
    };

    const getSuggestionValue = (suggestion) => suggestion.full_name;

    const renderSuggestion = (suggestion) => {
        return (
        <div>
            {suggestion.full_name}
        </div>

    )};

    const onSuggestionsFetchRequested = async ({value}) => {
        const suggestions = await getSuggestions(value);
        setSuggestions(suggestions);
    };

    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    const onSuggestionSelected = (event, {suggestion}) => {
        const coordinates = suggestion.point;
        const coords = [coordinates.lon, coordinates.lat];

        addPointFromAddress(coords);

        mapRef.current.setCenter(coords);
        setValue('');
        setSuggestions([]);
    };

    const onChange = (event, {newValue}) => {
        setValue(newValue);
    };

    const inputProps = {
        placeholder: 'Введите пункт назначения',
        value,
        onChange: onChange
    };

    return (
        <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            onSuggestionSelected={onSuggestionSelected}
            inputProps={inputProps}
        />
    );
};

export default Search2GIS;
