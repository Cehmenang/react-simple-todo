import { useReducer, useState, createContext } from 'react'
import CreateTodo from './CreateTodo.jsx'
import TodoList from './TodoList.jsx'
import './Todo.css'

export const todoReducer = createContext()

export default function Todo(){

    const initTodo = {
        create: false,
        prevTodos: [],
        todos: []
    }

    function reducerTodos(todos, { action, param = '', input = '' }){
        switch(action) {
            case 'fetch':
                return { 
                    create: initTodo.create,
                    prevTodos: todos.todos,
                    todos: todos.todos
                }
            case 'search':
                return { 
                    create: initTodo.create,
                    prevTodos: todos.todos.filter(todo=>todo.id == param).length == 0 || todos.todos.filter(todo=>todo.id == param).length == 1 
                        ? todos.prevTodos : todos.todos,
                    todos: param == '' || todos.todos.filter(todo=>todo.id == param).length == 0
                        ? todos.prevTodos : todos.todos.filter(todo=>todo.id == param)
                }
            case 'create':
                return { 
                    create: true,
                    prevTodos: todos.todos,
                    todos: todos.todos
                }
            case 'createTodo':
                return { 
                    create: initTodo.create,
                    prevTodos: [ ...todos.todos, { id: 
                        todos.todos.length == 0 ? 1 : todos.todos[todos.todos.length - 1].id + 1, activity: input.activity, time: input.time } ],
                    todos: [ ...todos.todos, { id: 
                        todos.todos.length == 0 ? 1 : todos.todos[todos.todos.length - 1].id + 1, activity: input.activity, time: input.time } ]
                }
            case 'delete':
                return {
                    create: initTodo.create,
                    prevTodos: todos.todos.filter(todo=>todo.id !== param),
                    todos: todos.todos.filter(todo=>todo.id !== param)
                }
            case 'reset':
                return {
                    create: initTodo.create,
                    prevTodos: [ ...initTodo.todos ],
                    todos: initTodo.todos
                }
            default:
                return { 
                    create: initTodo.create,
                    prevTodos: [ ...initTodo.todos ],
                    todos: initTodo.todos
                }
        }
    }

    const [ todos, dispatchTodo ] = useReducer(reducerTodos, initTodo)

    return (
        <>
        { todos.create == true ? 
        <todoReducer.Provider value={ { todos, dispatchTodo } }>
            <CreateTodo/> 
        </todoReducer.Provider>
        : 
        <todoReducer.Provider value={ { todos, dispatchTodo } }>
            <TodoList/> 
        </todoReducer.Provider>
        }

     
        </>
    )
}