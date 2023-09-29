import React from 'react';

function Count({clearItem, countItems}) {
    return (
        <div className='bottomCount'>
            <p className='numItems'>{countItems} items</p>
        <button onClick={clearItem} type='button'>Clear Completed</button>
        </div>
    )
}

export default Count;
