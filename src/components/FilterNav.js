import React from 'react';

function FilterNav() {
    return (
        <div className='filterNav'>
            <button type='button' className='filterButton'>All</button>
            <button type='button' className='filterButton'>Active</button>
            <button type='button' className='filterButton'>Completed</button>
        </div>
    )
}

export default FilterNav;
