import React from 'react';
import { MdDeleteForever, MdCancel, MdCheck } from "react-icons/md";


function TodoItem({todoData, deleteItem, setTodoStatus}) {
    return (
        <>
            <div className='itemsContainer'>
                <div className='item'>
                    {todoData.status ? <MdCheck onClick={() => setTodoStatus(todoData.id)} className='check'/> : <MdCancel onClick={() => setTodoStatus(todoData.id)} className='cancel'/>}
                    <p className={`completedFont ${todoData.status ? "completed" : ""}`}>{todoData.text}</p>
                </div>
                <MdDeleteForever onClick={() => deleteItem(todoData.id)} className='delete'/>
            </div>
            <hr color='#e0ebeb'/>
        </>
    )
}

export default TodoItem;
