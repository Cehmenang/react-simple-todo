import { todoReducer } from "./Todo.jsx"
import { useContext, useRef } from "react"

export default function CreateTodo(){
    const { todos, dispatchTodo } = useContext(todoReducer)
    const inputActivity = useRef(null)
    const inputTimeActivity = useRef(null)

    function onCreateFormSubmit(e){
        e.preventDefault()
        dispatchTodo({ action: 'createTodo', input: { activity: inputActivity.current.value, time: inputTimeActivity.current.value } })
    }

    return (
        <>
        <form action="" className="form" onSubmit={onCreateFormSubmit}>
            <label className="label">Fill Your Activity</label>
            <input type="text" className="input" ref={inputActivity} required/>
            <label className="label">Your Time Activity</label>
            <input type="text" className="input" ref={inputTimeActivity} required/>
            <button type="submit" className="button">Submit</button>
        </form>
        </>
    )
}