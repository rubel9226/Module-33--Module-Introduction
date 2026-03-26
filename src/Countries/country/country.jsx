import React, { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountries, handleVisitedFlags }) => {
    const [ visited, setVisited ] = useState(false);

    const { name } = country;
    // console.log(country.area.area);
    // console.log(handleVisitedCountries)

    function handleVisited(){
        // basic system 
        // if(visited){
        //     setVisited(false);
        // }else{
        //     setVisited(true)
        // }
        
        // system 2
        // setVisited(visited ? false : true)

        // system 3
        setVisited(!visited)

        handleVisitedCountries(country);
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img className='image' src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Country: {name.common} </h3>
            <p>Population: {country.population.population}</p>
            <p>{country.area.area} {country.area.area > 300000 ? 'Big Country' : 'Small Country'}</p>
            <button onClick={handleVisited}>
                {visited ? 'visited': 'Not Visited'}
            </button>
            <button onClick={() =>{ handleVisitedFlags(country.flags.flags.png) }} style={{marginLeft: '10px'}}>Add Visited Flag</button>
        </div>
    );
};

export default Country;

/**
 * 1. Inline css
 * 2. Tailwind css
 * 3. create css file
 * 4.
 */