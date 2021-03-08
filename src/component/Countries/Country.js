import React from 'react';
import '../Countries/Country.css'

const Country = (props) => {
    const {name,capital,flag,alpha3Code} = props.country
    return (
        <div className = "country-details">
            <img src={flag}alt=""/>
           <h1>{name}</h1> 
           <h2>{capital}</h2>
           <button className = 'btn'>Details</button>
        </div>
    );
};

export default Country;