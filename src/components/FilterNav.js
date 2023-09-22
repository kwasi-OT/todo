import React from 'react';

function FilterNav() {
    return (
        <div>
            <button type='button' className='filter'>All</button>
            <button type='button' className='filter'>Active</button>
            <button type='button' className='filter'>Completed</button>
        </div>
    )
}

export default FilterNav;
