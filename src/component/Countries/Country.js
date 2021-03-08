import React from 'react';
import '../Countries/Country.css';
import {Link  } from "react-router-dom";

const Country = (props) => {
    const {name,capital,flag,alpha3Code} = props.country
    return (
        <div className = "country-details">
            <img src={flag}alt=""/>
           <h1>{name}</h1> 
           <h2>{capital}</h2>
          <Link to={`/country/${alpha3Code}`}>{alpha3Code}</Link>
        </div>
    );
};

export default Country;