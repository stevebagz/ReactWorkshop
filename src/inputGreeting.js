import React, {useState} from 'react';
import "./inputGreeting.css";

function InputGreeting () {
    const [name, setName] = useState('')
    const [greeting, setGreeting] = useState('')

    function handleChange (e) {
        setName(e.target.value)
    };

    function handleSubmit (e) {
        e.preventDefault();
        setGreeting(`Hello, nice to meet you ${name}!`)
        setName('')
        
    }

    return (
        <div id="input-component">
            <h1>Custom Greeting Tool</h1>
            <div id="input-main-container">
                <form id="input-and-button-container">
                    <input type="text" onChange={handleChange} value={name} placeholder='Enter your name' />
                    <button id='input-submit-button' onClick={handleSubmit}>Submit</button>
                </form>
                <div id="greeting-container">
                    <p id="greeting">{greeting}</p>
                </div>
            </div>
            <p id="input-info">This one looks pretty easy, but wasn't without its hang-ups. I'd forgotten how to 
                    make the form and submit button interact with each other. I learned how to make React 
                    avoid clearing the greeting information as soon as it was submitted.  
                    More usage of useState here, not only to help with capturing and setting a name from the 
                    input field, but also setting a greeting to be rendered upon submission.
                    This was great practice and I think it'd suit me if I did this again (or edited this one) by 
                    using a complete form(3 or 4 input entries) coupled with a submit button that requires all 
                    fields to be filled, then return a silly short story or paragraph using the information 
                    entered into the form.  But it's late, and that's another day of coding!
            </p>
        </div>
    )
}

export default InputGreeting;