import React from 'react';

function Count({clearItem}) {
    return (
        <div className='bottomCount'>
            <p className='numItems'>Total</p>
        <button onClick={clearItem} type='button'>Clear Completed</button>
        </div>
    )
}

export default Count;
