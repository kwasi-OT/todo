import React, {useState} from 'react';


function Form({addHandler, addTheme}) {
    const[userInput, setUserInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addHandler(userInput);
        setUserInput("");
    };

    return (
        <form className={`formContent ${addTheme ? 'dark' : ''}`} onSubmit={handleSubmit}>
            <input type="text" id='item' value={userInput} onChange={(e) => setUserInput(e.target.value)} name='item' placeholder='Create new ToDo item' required/>
            <button className='formButton' type="submit">Add</button>
        </form>
    )
}

export default Form;
