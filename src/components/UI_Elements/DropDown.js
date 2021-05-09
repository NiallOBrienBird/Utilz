import React from 'react'
import Option from './Option'
const DropDown = ({whenChanged, items, label, orientation}) => {
    return (
        <div className="drop-down" style= {{
            display: "flex",
            flexDirection: parseLocation(orientation),
            justifyContent: "center",
            alignItems: "center"
        }}> 
            <Option items={items} whenChanged={whenChanged}/>
            <h4 className="label">
                {label}
            </h4>
        </div>
    )
}

DropDown.defaultProps = {
    whenChanged: e => console.log("e"), 
    label: "Drop Down",
    items: ["item 1", "item 2", "item 3"],
    orientation: "top"
}

function parseLocation(string_to_parse) {
    switch (string_to_parse) {
        case 'top' || 'up':
            return 'column-reverse'
        case 'bottom' || 'down':
            return 'column'
        case 'left' || 'first':
            return 'row-reverse'
        default:
            return 'row'
    }
}


export default DropDown
