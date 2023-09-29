import React from 'react';

function Count({clearItem, count}) {
    return (
        <div className='bottomCount'>
            <p className='numItems'>{count} items</p>
        <button onClick={clearItem} type='button'>Clear Completed</button>
        </div>
    )
}

export default Count;
