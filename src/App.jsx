import './App.css'
import { useState, useEffect } from 'react'
import Tasks from './components/Tasks'

function App() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [validationError, setValidationError] = useState("");


  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks")
    return storedTasks ? JSON.parse(storedTasks) : []
  })

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {
    if (!title.trim() || !description.trim()) {
      setValidationError("Title and description fields cannot be left blank.");
      return;
    }
    const newTask = {
      title,
      description,
      completed: false,
      createdAt: new Date().getTime()
    }

    setTasks([...tasks, newTask])
    setTitle("")
    setDescription("")
    setValidationError("")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask()
  }

  const toggleTaskCompleted = (index) => {
    const updatedTasks = [...tasks]
    updatedTasks[index].completed = !updatedTasks[index].completed
    setTasks(updatedTasks)
  }

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  const filteredTasks = tasks.filter(task => {
    if (filterStatus === "completed") return task.completed
    if (filterStatus === "incomplete") return !task.completed
    return true
  })



  return (
    <div className='m-auto max-w-[650px] mt-25 py-5 px-4 md:px-0'>
      <h1 className='text-5xl font-space font-bold mb-4'>To-Do App</h1>


      <Tasks
        title={title}
        description={description}
        onTitleChange={(e) => setTitle(e.target.value)}
        onDescriptionChange={(e) => setDescription(e.target.value)}
        onSubmit={handleSubmit}
        tasks={filteredTasks}
        onComplete={toggleTaskCompleted}
        onDelete={deleteTask}
        onFilterChange={setFilterStatus}
        validationError={validationError}
      />

    </div>
  )
}
export default App