import React from 'react';
import { MdCancel } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";


function TodoItem() {
    return (
        <div className='item'>
            <MdCancel/>
            <p>item</p>
            <MdDeleteForever/>
        </div>
    )
}

export default TodoItem
