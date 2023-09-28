import React from 'react';
import { MdDeleteForever, MdCancel, MdCheck } from "react-icons/md";


function TodoItem({todoData, deleteItem, setTodoStatus}) {
    return (
        <>
            <div className='itemsContainer'>
                <div className='item'>
                    {todoData.status ? <MdCheck className='cancel'/> : <MdCancel className='cancel'/>}
                    <p>{todoData.text}</p>
                </div>
                <MdDeleteForever onClick={() => deleteItem(todoData.id)} className='delete'/>
            </div>
            <hr color='#e0ebeb'/>
        </>
    )
}

export default TodoItem;
