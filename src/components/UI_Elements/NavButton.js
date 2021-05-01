import { React } from 'react'
import { MdArrowBack } from 'react-icons/md'
import Link  from 'react-delay-link'
import Tilt from 'react-parallax-tilt'

export const NavButton = ({ assignClass, onSelect }) => {
    function select() {
       document.querySelector(".nav-button").classList.add("animate")
    }
    
    return (
        <div className ="test" width="2rem">
            <Tilt scale={1.125}>
                <Link to="/" delay="600ms" id="linker">
                    <div to="/" className={`nav-button ${assignClass}`} onClick={select}> 
                        <MdArrowBack/>
                    </div>
                </Link>
            </Tilt>
        </div>
    )
}

NavButton.defaultProps = {
    assignClass: '',
    onSelect: ()=>{console.log("selected")}
}


export default NavButton