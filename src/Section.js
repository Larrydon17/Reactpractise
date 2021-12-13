import React from 'react'
import { useState } from 'react'
import './Section.css'

const Section = () => {
    const [value, setValue] = useState(0)
   

    const reset = () =>{
        setValue(0)
    }

    
    return (
        <div className='got'>
        
            <h2>counter</h2>
            <h1> {value} </h1>
            <div className='gta'>
            <button onClick={ () => {setValue(value + 1)}} >Increase</button>
            <button onClick={reset} >Reset</button>
            <button onClick={ () => {setValue(value - 1)}} >Decrease</button>
            
            </div>
        </div>
    )
}

export default Section
