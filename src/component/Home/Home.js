import React, { useEffect, useState } from 'react';
import Country from '../Countries/Country';

const Home = () => {
   const [countries, setCountries] = useState([]);
   useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
   },[])
    return (
        <div>
            {
                countries.map(country => <Country country = {country}>ok</Country>)
            }
        </div>
    );
};

export default Home;