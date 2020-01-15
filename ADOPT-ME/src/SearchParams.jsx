import React, { useState } from 'react';

const SearchParams = () => {
    const [location, setLocation] = useState('Austin, TX');

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
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;