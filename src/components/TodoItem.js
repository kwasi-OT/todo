import React from 'react';
import { MdDeleteForever, MdCancel, MdCheck } from "react-icons/md";


function TodoItem({todoData}) {
    return (
        <>
            <div className='itemsContainer'>
                <div className='item'>
                    <MdCancel className='cancel'/>
                    <p>{todoData}</p>
                </div>
                <MdDeleteForever className='delete'/>
            </div>
            <hr color='#e0ebeb'/>
        </>
    )
}

export default TodoItem;
