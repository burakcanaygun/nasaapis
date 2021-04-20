import React, { useReducer } from 'react';
import axios from 'axios';
import NasaContext from './nasaContext';
import NasaReducer from './nasaReducer';
import {GET_APOD, SET_LOADING} from '../types';


const NasaState = props => {
    const initialState = {
        data: {},
        loading: false,
        links: [
            { link: "/apod", text: "APOD" },
            { link: "/neows", text: "NeoWS" },
            { link: "/donki", text: "DONKI" },
            { link: "/earth", text: "Earth" },
            { link: "/eonet", text: "EONET" },
            { link: "/epic", text: "Epic" },
            { link: "/exoplanet", text: "Exoplanet" },
            { link: "/genelab", text: "GeneLab" },
            { link: "/insight", text: "Insight" },
            { link: "/rover", text: "Rover Photos" },
            { link: "/ivl", text: "NASA IVL" },
            { link: "/techtransfer", text: "TechTransfer" },
            { link: "/ssc", text: "SSC" },
            { link: "/ssd", text: "SSD/CNEOS" },
            { link: "/techport", text: "TechPort" },
            { link: "/tle", text: "TLE API" },
            { link: "/wmts", text: "WMTS" }]
    }
    const [state, dispatch] = useReducer(NasaReducer, initialState);

    //getApod
    const getApod = async () => {
        setLoading();
        const res = await axios.get(`${process.env.REACT_APP_NASA_URL}/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`);
        dispatch({
            type: GET_APOD,
            payload: res.data
        });

    }

    //set loading
    const setLoading = () => {
        dispatch({
            type: SET_LOADING
        });
    }

    return <NasaContext.Provider value={{
        startTime: state.startTime,
        endTime: state.endTime,
        data: state.data,
        getApod,
        links: initialState.links,
        loading: state.loading
    }}>
        {props.children}
    </NasaContext.Provider>
}


export default NasaState;
