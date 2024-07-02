import React, { useState } from 'react'

function EventHandlerComp() {
    var [count, setCount] = useState(0);
    var [state, setState] = useState({});

    var handleChange = () => {
        setCount(count + 1);
    }
    var changeText = (event) => {
        setState({
            companyName: event.target.value
        });
    }
    return (
        <>
            <h1>Total Clicked event {count}</h1>
            <button onClick={handleChange}>EventHandlerComp</button>
            <p onChange={handleChange}><button>Onchange</button></p>

            <h2>Simple Event Example</h2>
            <label htmlFor="name">Enter company name: </label>
            <input type="text" id="companyName" onChange={changeText.bind(this)} />
            <h4>You entered: {state.companyName}</h4>
        </>
    )
}

export default EventHandlerComp