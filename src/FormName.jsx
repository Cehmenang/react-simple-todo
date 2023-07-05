import { useState, useRef, useContext } from 'react'
import { nameState } from './App.jsx'

export default function FormName(){
    const input = useRef(null)
    const setName = useContext(nameState)

    function onFormSubmit(e){
        e.preventDefault()
        return setName(input.current.value)
    }

    return (
        <>
            <form action="" className="form" onSubmit={onFormSubmit}>
            <label className="label">Fill Your Name Here</label>
            <input type="text" className="input" ref={input}/>
            <button type="submit" className="button">Submit</button>
            </form>
        </>
    )
}