import React from 'react';

function FilterNav({addFilter}) {
    return (
        <div className='filterNav'>
            <button onClick={() => addFilter('all')} type='button' className='filterButton'>All</button>
            <button onClick={() => addFilter('active')} type='button' className='filterButton'>Active</button>
            <button onClick={() => addFilter('completed')} type='button' className='filterButton'>Completed</button>
        </div>
    )
}

export default FilterNav;
