import React, { use, useState } from 'react';
import Country from './country/country';
import './Countries.css';


const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);


    const handleVisitedCountries = (country) => {
        console.log('handel Visited Country Click', country);
        const newVisitedCountries = [...visitedCountries, country];

        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }
    
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries);


    return (
        <div>
            <h1>In the Countries: {countries.length} </h1>
            <h3>Total Country Visited:  {visitedCountries.length} </h3>
            <h3>{visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li
                     key={country.cca3.cca3} 
                    >{country.name.common}</li>)
                }
            </ol>
            <div>
                {
                    visitedFlags.map((flag, index) => <img key={index} className='visited-flags' src={flag}></img>)
                }
            </div>
            <div className='countries'>
                {
                    countries.map(country => <Country 
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlags={handleVisitedFlags}
                        key={country.cca3.cca3} 
                        country={country}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;