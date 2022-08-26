import { React } from 'react'
import './simpletext.css'
import Tilt from 'react-parallax-tilt'

export default function SimpleText(props){
    return(
        <Tilt tiltEnable="true" scale={1.2}>
            <span className='simple-text'>{props.children ? props.children : props.text}</span>
        </Tilt> 
    )
}