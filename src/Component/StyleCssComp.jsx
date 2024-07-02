import React from 'react'
import '../App.css'
import style from '../App.css'

function StyleCssComp() {
    var CssModule = {
        color: "red"
    }
    return (
        <>
            <h4>Type of css</h4>
            <ul>
                <li>Inline Styling</li>
                <li>CSS Stylesheet</li>
                <li>CSS Module</li>
                <li>Styled Components</li>
                <h1 style={{ color: "purple" }}>Example of inline css</h1>
                <p className='Stylecss'>This is the example of Style Sheet</p>
                <p style={CssModule}>This is the example of styled components</p>
                <p className={style.mystyle}>This is the example of css module</p>


            </ul>
        </>
    )
}

export default StyleCssComp