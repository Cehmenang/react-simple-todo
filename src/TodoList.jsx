import { useContext, useRef, useEffect } from "react"
import { todoReducer } from "./Todo.jsx"

export default function TodoList(){
    const { todos, dispatchTodo } = useContext(todoReducer)
    const search = useRef(null)

    useEffect(()=>{
        dispatchTodo({ action: 'fetch' })
    }, [])

    const todosLists = todos.todos.map((todo, index)=>{
        return (
            <tr key={todo.id}>
                <td>{index+1}</td>
                <td>{todo.id}</td>
                <td>{todo.activity}</td>
                <td>{todo.time}</td>
                <td><button className="btn">Edit</button></td>
                <td><button className="btn" onClick={dispatchTodo.bind(this, { action: 'delete', param: todo.id } )}>Delete</button></td>
            </tr>
        )
    })

    function onSearchTodo(){
        return dispatchTodo({ action: 'search', param: search.current.value })
    }


    function showTableTodos(){
        return (
            <>
            <div className="container-table">
            

            <table>
                <tbody>
                    <tr>
                        <th>No.</th>
                        <th>ID</th>
                        <th>Activity</th>
                        <th>Time</th>
                        <th colSpan="2">Action</th>
                    </tr>
                    {todosLists}
                </tbody>

            </table>
            </div>
            </>
        )
    }

    return (
        <>  
            <div className="cari">
                <input type="text" placeholder="Search By Todo ID ..." ref={search} className="search" onChange={onSearchTodo}/>
            </div>

            { todos.todos.length > 0 ? showTableTodos() : 
            <h1 className="error">Todos are not available. Create todo?</h1>
            }
        
            <button className="create" onClick={dispatchTodo.bind(this, { action: 'create' })}>Create</button>
            <button className="create" onClick={dispatchTodo.bind(this, { action: 'reset' })}>Reset</button>
        </>
    )
}