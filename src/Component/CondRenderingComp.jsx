import React, { useState } from 'react'

function CondRenderingComp() {
    var [isLogined, setIsLogined] = useState(0)
    var login = () => {
        return (
            <>
                <h1>Your Welcome</h1>
                <h1>Your Login </h1>
                <button onClick={() => setIsLogined(0)}>LogOut</button>
            </>
        )
    }
    var Signup = () => {
        return (
            <>
                <h1>Please signUp your not login Login </h1>
                <button onClick={() => setIsLogined(1)}>Login</button>

            </>
        )
    }
    return (
        <>
            <div>CondRenderingComp</div>
            {isLogined ? login() : Signup()}
        </>
    )
}

export default CondRenderingComp