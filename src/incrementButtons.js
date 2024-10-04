import React, { useState } from 'react';
import './incrementButtons.css';

function IncrementButtons () {
    const [currentValue, setValue] = useState(0);

    function incrementUp () {
        setValue(currentValue +1);
    }

    function incrementDown () {
        setValue(currentValue -1);
    }

    return (
        <div id="increment-div">
            <h1>Increment Counter</h1>
            <div id='increment-demo-area'>
                <p id="increment-text">
                    The current value is {currentValue}
                </p>
                <div id="inc-button-container">
                    <button className="inc-button" onClick={incrementUp}>Increment Up</button>
                    <button className="inc-button" onClick={incrementDown}>Increment Down</button>
                </div>
            </div>
            <p id="increment-info">
                For this component, I practiced using the useState() feature.  I created the currentValue
                variable (counter) and the setValue function using useState.  I then created two "sister" 
                functions - one to increase the counter and one to decrease it.  When the increment button is 
                clicked, calls setValue and manipulates currentValue by +1 or -1, depending on the button you
                clicked.  In a way, I felt intimidated by the idea of leaving pure JavaScript to make a 
                button-operated counter, but it turns out to feel much more intuitive by using React.  A small, 
                simple mechanism, but a great example of implementing common elements with modern techniques.  
                In the future, I'd like to set the buttons to "grey out" and become disabled once the counter 
                reaches a cap or attempts to go into the negative.  Button animations would be cool too.  Just 
                a thought.
            </p>
        </div>
    )
}

export default IncrementButtons;