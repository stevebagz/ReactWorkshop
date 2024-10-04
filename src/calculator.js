import React, {useState} from "react";
import "./calculator.css";
import { evaluate } from "mathjs";

function Calculator () {
    const [input, setInput] =useState('');
    const [result, setResult] = useState('');

const handleClick = (e) => {
        setInput(input + e.target.value);
}

const doMath = () => {

    try {
        setResult(evaluate(input));
    }
    catch {
        setResult('error')
    }
}

const clearScreen = () => {
    setInput("");
    setResult("");
}

    return (
        <div id="main-container">
            <h1>Calculator Tool</h1>
            <div id="display-container">
                <input id="calc-display" type='text' readOnly value={result || input}/>
            </div>
            <div id="grid-container">
                <button class="grid-item" value="1" onClick={handleClick}>1</button>
                <button class="grid-item" value="2" onClick={handleClick}>2</button>
                <button class="grid-item" value="3" onClick={handleClick}>3</button>
                <button class="grid-item" value="4" onClick={handleClick}>4</button>
                <button class="grid-item" value="5" onClick={handleClick}>5</button>
                <button class="grid-item" value="6" onClick={handleClick}>6</button>
                <button class="grid-item" value="7" onClick={handleClick}>7</button>
                <button class="grid-item" value="8" onClick={handleClick}>8</button>
                <button class="grid-item" value="9" onClick={handleClick}>9</button>
                <button class="grid-item utility-button" value="." onClick={handleClick}>.</button>
                <button class="grid-item" value="0" onClick={handleClick}>0</button>
                <button class="grid-item utility-button" onClick={clearScreen}>CE</button>
                <button class="grid-item operator-button" value="+" onClick={handleClick}>+</button>
                <button class="grid-item operator-button" value="-" onClick={handleClick}>-</button>
                <button class="grid-item operator-button" value="*" onClick={handleClick}>*</button>
                <button class="grid-item operator-button" value="/" onClick={handleClick}>/</button>
                <button class="grid-item" id="equals-button" onClick={doMath}>=</button>
            </div>
            <p id="calc-info">The calculator.  This one I've heard of as a beginner exercise for a long time
                now.  I have to say, it's alot different when you have to take something you can figure out how
                to make in JavaScript and just run within your IDE, rather than integrating your jsx into a web
                app and actually giving life to it.   I got stumped a few times on useState with this one, and
                needed help (I usually do, and I'm grateful to have it).  Ended up getting through it, and now 
                that the code is in there, its alot easier to understand.  I should practice this more too!   
                This tool has so many flaws too!  You can't hit the equals button, and then add to your result.
                All operations have to fit on the display at once, you get one press of the equals button, and 
                then you're froze until you hit CE to get back to a clean slate.  But hey, it works!
            </p>
        </div>
    )
}

export default Calculator;