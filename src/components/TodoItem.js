import React from 'react';
import { MdCancel } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";


function TodoItem() {
    return (
        <>
            <div className='itemsContainer'>
                <div className='item'>
                    <MdCancel className='cancel'/>
                    <p>item</p>
                </div>
                <MdDeleteForever className='delete'/>
            </div>
            <hr color='#e0ebeb'/>
        </>
    )
}

export default TodoItem
