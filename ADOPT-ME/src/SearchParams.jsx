import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';

const SearchParams = () => {
    const [location, setLocation] = useState('Austin, TX');
    const [animal, setAnimal] = useState('ALL');

    return (
        <div className='search-params'>
            <h3>{location}</h3>
            <form>
                <label htmlFor="location">
                    Location
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => { setLocation(e.target.value) }}
                    />
                </label>
                <label htmlFor='animal'>
                    Animals
                    <select
                        id='animal'
                        value={animal}
                        onChange={(e) => setAnimal(e.target.value)}
                        onBlur={(e) => setAnimal(e.target.value)}
                    >
                        <option>ALL</option>
                        {/* note the map return using '()' instead of '{}' */}
                        {ANIMALS.map(animal => (
                            <option value={animal} key={animal}>{animal}</option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
            </form >
        </div >
    )
}

export default SearchParams;