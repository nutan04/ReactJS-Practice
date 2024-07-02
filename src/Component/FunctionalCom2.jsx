import React from 'react'

export default function FunctionalCom(name) {
    // Define the style object
    var style = {
        color: "green "
    }

    return (
        <div>
            <div>
                <p style={style}>{name.name}</p>
            </div>
        </div>
    )
}

