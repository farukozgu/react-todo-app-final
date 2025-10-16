import React from 'react'
import TaskList from './TaskList'


function Tasks({ tasks, onComplete, onDelete, onTitleChange, onDescriptionChange, onSubmit, onFilterChange, title, description, validationError }) {

    return (
        <div>
            <form onSubmit={onSubmit} className='my-2 flex items-center gap-1 flex-wrap'>
                <input
                    className='w-full md:w-auto border mx-1 px-3 font-space p-1 rounded-xl focus:ring-2 focus:ring-blue-500 flex-grow'
                    type="text"
                    placeholder="Task title"
                    value={title}
                    onChange={onTitleChange}
                />
                <input
                    className='w-full md:w-auto border mx-1 px-3 font-space p-1 rounded-xl focus:ring-2 focus:ring-blue-500 flex-grow'
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={onDescriptionChange}
                />
                <button
                    className='bg-[#8A2BE2] hover:bg-[#933EEA] text-white text-base flex items-center gap-1 shadow-md font-space py-2 px-7 m-1 cursor-pointer rounded-xl transition'
                    type="submit"
                >
                    <i class='bxr bx-plus-circle' style={{ fontSize: '16px' }} ></i>  Add
                </button>
            </form>

            <div className="my-6">
                <button
                    className='bg-[#8A2BE2] hover:bg-[#933EEA] shadow-sm text-white font-space text-sm py-1 px-3 m-1 cursor-pointer rounded-xl transition'
                    onClick={() => onFilterChange("all")}
                >
                    All
                </button>
                <button
                    className='bg-green-100 hover:bg-green-200 shadow-sm text-blackfont-space text-sm py-1 px-3 m-1 cursor-pointer rounded-xl transition'
                    onClick={() => onFilterChange("completed")}
                >
                    Completed
                </button>
                <button
                    className='bg-yellow-100 hover:bg-yellow-200 shadow-sm text-black font-space text-sm py-1 px-3 m-1 cursor-pointer rounded-xl transition'
                    onClick={() => onFilterChange("incomplete")}
                >
                    Pending
                </button>
            </div>
            {validationError && (
                <div className="font-space text-lg text-center p-3 mb-4 bg-red-100 text-red-700 rounded-lg shadow-sm">
                    {validationError}
                </div>
            )}

            <TaskList
                tasks={tasks}
                onComplete={onComplete}
                onDelete={onDelete}
            />
        </div>
    )
}

export default Tasks
