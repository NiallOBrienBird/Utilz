import React from 'react'
import NavButton from './UI_Elements/NavButton'

export const DemoApp = () => {  

    return (
        <div className="app-container">
            <div className="main">
                <h2>App Lives In Here</h2>
            </div>
            <div className="nav">
                <NavButton assignClass="back"/>
            </div>
        </div> 
    )
}

export default DemoApp
