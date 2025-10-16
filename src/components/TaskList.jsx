import React from 'react'
import TaskItem from './TaskItem'

function TaskList({ tasks, onComplete, onDelete }) {

    if (!tasks || tasks.length === 0) {
        return <p className='text-center font-space text-xl text-black p-4 shadow-md hover:shadow-lg transition-all duration-200 rounded-lg bg-white mt-4'>No tasks yet!</p>
    }

    return (
        <div className='mt-4'>
            {tasks.map((task, index) => (
                <TaskItem
                    key={index}
                    title={task.title}
                    description={task.description}
                    completed={task.completed}
                    createdAt={task.createdAt}
                    onComplete={() => onComplete(index)}
                    onDelete={() => onDelete(index)}
                />
            ))}
        </div>
    )
}

export default TaskList
