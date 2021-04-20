import React, {useContext, useEffect} from 'react'
import NasaContext from '../../context/nasa/nasaContext';
import ApodCard from './ApodCard';
import Loading from "../Loading";

const Apod = () => {

    //Init Context
    const nasaContext = useContext(NasaContext);
    const {getApod, data, loading} = nasaContext;

    //Get Data From Reducer
    const {date, explanation, hdurl, media_type, title, url} = data;

    useEffect(() => {
        getApod();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (loading) {
        return <Loading/>
    } else {

        return (
            <div>
                <ApodCard date={date} explanation={explanation} hdurl={hdurl} media_type={media_type} title={title} url={url}/>
            </div>

        )

    }

}

export default Apod
