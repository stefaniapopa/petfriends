import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='Search Dogs..'
                onChange={searchChange}
                style={{ "border-radius": '130px'}}
            />
        </div>
    );
}

export default SearchBox;