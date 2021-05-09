import React from 'react'
import { useState } from 'react'
import bipolarPow from '../../resourses/code/bipolarPow'

const Slider = ({label, prefix, min, max, default_value, orientation, pow}) => {
    if(!default_value) default_value = (max - min) / 2;

    const [sd, setValue] = useState(default_value);
    
    let labeling = {
        display: "flex", 
        flexDirection: parseLocation(orientation),
        justifyContent: "center",
        alignItems: "center"
    }

    function scale(to_scale){
        to_scale *= 0.01
        if(pow !== 1) to_scale = bipolarPow(to_scale)
        to_scale = (to_scale * (max - min)) + min

        return to_scale
    }

    return (
        <div className="slider-holder" style={{margin: '0px', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <h4 className="label">
                {label}
            </h4>
            <div className="slider" style={labeling}>
                <input type="range" 
                    min={0} 
                    max={100} 
                    default={default_value} 
                    style={{margin: '20px'}}
                    onChange = { e =>  {
                            setValue(scale(e.target.value))
                        }
                    }
                />
                <div className="value">{`${sd.toFixed(2)} ${prefix}`}</div>
            </div>
        </div>
    )
}

Slider.defaultProps = {
    label: 'Label Here',
    prefix: '',
    min: 0,
    max: 100,
    default_value: false,
    label_location: 'row',
    pow: 1
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

export default Slider