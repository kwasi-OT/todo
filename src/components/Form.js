import React from 'react';

function Form() {
    return (
        <form className='formContent'>
            <input type="text" id='item' name='item' placeholder='Create new ToDo item'/>
            <button className='formButton' type="submit">Add</button>
        </form>
    )
}

export default Form;
