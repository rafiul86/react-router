import React, { useEffect,useState } from 'react';
import {useParams} from 'react-router-dom';
const CountryDetails = () => {
    let {countryCode} = useParams();
    const [country,setCountry] = useState([]);
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/alpha/${countryCode}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data))
    },[countryCode])
    return (
        <div className = 'country-details'>
            <img src={country.flag} alt=""/>
            <h1>{country.name}</h1>
            <p>Capital :{country.capital}</p>
            <p>{country.alpha3Code}</p>
            <p> Population : {country.population}</p>
            <p>Area :  {country.area}sSqKm</p>
        </div>
    );
};

export default CountryDetails;