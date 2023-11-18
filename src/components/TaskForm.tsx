import { useState } from 'react'

export const TaskForm = () => {
    const [inputState, setInputState] = useState('')
    const [todos, setTodos] = useState<string[]>([])

    const addTodo = (
        event:
            | React.ChangeEvent<HTMLInputElement>
            | React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault()
        if (inputState !== '') {
            setTodos([...todos, inputState])
            setInputState('')
        }
    }

    interface IDeleteTodo {
        event: React.MouseEvent<HTMLButtonElement>
        text: string
    }

    const deleteTodo = ({ event, text }: IDeleteTodo) => {
        event.preventDefault()
        const newTodos = todos.filter((todo) => {
            return todo !== text
        })
        setTodos(newTodos)
    }

    return (
        <>
            <form className="grid place-content-center">
                <label className="text-2xl" htmlFor="taskForm">
                    Task Form
                </label>
                <div className="flex">
                    <input
                        onChange={(event) => setInputState(event.target.value)}
                        type="text"
                        id="taskForm"
                        value={inputState}
                        placeholder="add a task"
                    />
                    <button className="w-100 ml-4" onClick={addTodo}>
                        Add Task
                    </button>
                    <button className="w-100 ml-4" onClick={deleteTodo}>
                        Delete Task
                    </button>
                </div>
                <div className="border border-black mt-4">
                    <ul>
                        {todos.map((todo) => {
                            return <li key={todo}>{todo}</li>
                        })}
                    </ul>
                </div>
            </form>
        </>
    )
}
