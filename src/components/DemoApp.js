import React from 'react'
import NavButton from './UI_Elements/NavButton'
import Slider from './UI_Elements/Slider'
import DropDown from './UI_Elements/DropDown'

export const DemoApp = () => {  
    
    function whenChanged(value) {
        value.split('').forEach(letter => {
            console.log(letter)
        })
    }

    return (
        <div className="app-container">
            <div className="main">
                <h2>App Lives In Here</h2>
                <Slider min={0} max={1} prefix={'%'}/>
                <DropDown whenChanged={whenChanged} items={["Sandwhich", "Sausage", "Dubstep"]}/>
            </div>
            <div className="nav">
                <NavButton assignClass="back"/>
            </div>
        </div> 
    )
}

export default DemoApp
