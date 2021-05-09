import React, { useState, useEffect } from 'react'
import {AiOutlineDown} from 'react-icons/ai'

const Option = ({items, whenChanged}) => {
    const [current, setCurrent] = useState(items[0])
    const [arrow_col, setArrowCol] = useState('')
    const [show, setShow] = useState('hide')

    useEffect(() => {
        whenChanged(current)
    },[current])

    return (
        <div className="option">
            <div className={`main ${show}`}>
                <div className="text">
                    {current}   
                </div>
                <div className={`icon ${show}`} 
                    style={arstyle}
                    onMouseOver = {e => {
                        setArrowCol('grey')
                    }}
                    onMouseLeave = {e => {
                        setArrowCol('')
                    }}
                    onClick = {() => {
                        show === 'show' ?       setShow('hide') : 
                                                setShow('show')
                    }}>
                    <AiOutlineDown color={arrow_col}/>
                </div>
            </div>
            <div className={`options ${show}`}>
                {items.map((option, index) => 
                    <div className="option" key={index} onClick={e => {
                        setShow('hide')
                        setCurrent(option)
                    }}>
                        {option}
                    </div>
                )}
            </div>
        </div>
    )
}

Option.default_props = {
    items: ["item 1", "item 2", "item 3"], 
    whenChanged: to_output => console.log(to_output)
}

let arstyle = {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'centre'
}

export default Option
