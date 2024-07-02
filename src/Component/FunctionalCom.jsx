import React from 'react'

export default function FunctionalCom({ name }) {
    // Define the style object
    var style = {
        color: "blue"
    }

    return (
        <div>
            {name.map(function (d, idx) {
                return (<li key={idx} style={style}>{d.name}</li>)
            })}
        </div>
    )
}

