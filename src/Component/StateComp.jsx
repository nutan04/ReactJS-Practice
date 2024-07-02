import React, { useState } from 'react'

function StateComp() {
    var [count, setCount] = useState(0)
    var increment = () => {
        setCount(count + 1);
    }
    var decrement = () => {
        setCount(count - 1);
    }
    return (
        <>
            <div>StateComp</div>
            <p>this is number {count} </p>
            <button type="button" onClick={increment}>Increase value </button>
            <button type="button" onClick={decrement}>Increase value</button>

        </>
    )
}

export default StateComp