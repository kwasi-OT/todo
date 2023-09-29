import React from 'react';

function Count({clearItem}) {
    return (
        <div className='bottomCount'>
            <p className='numItems'>Total</p>
        <button className='clearCompleted' onClick={clearItem} type='button'>Clear Completed</button>
        </div>
    )
}

export default Count;
