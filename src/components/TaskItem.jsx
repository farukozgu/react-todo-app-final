import React from 'react'


function TaskItem({ title, description, completed, onComplete, onDelete, createdAt }) {

    const formatDate = (timestamp) => {
        if (!timestamp) return "Tarih Yok";

        const date = new Date(timestamp);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');

        return `${day}.${month}.${year} ${hours}:${minutes}`;
    };

    const statusClasses = completed
        ? 'bg-green-100 text-black'
        : 'bg-yellow-100 text-black';

    const textClasses = completed ? 'line-through text-gray-500' : 'text-gray-800';

    return (
        <div
            className='p-4 mb-4 bg-white rounded-xl transition duration-300 ease-in-out shadow-lg hover:shadow-xl hover:scale-[1.01]'
        >
            <div className='flex justify-between items-center mb-3'>
                <p className={`max-w-[130px] min-w-[110px] flex items-center justify-center gap-1 text-center font-space text-sm py-1 px-3 rounded-full transition ${statusClasses}`}>
                    {completed ? (
                        <>
                            Completed <i className='bx bx-check' style={{ fontSize: '16px' }}></i>
                        </>
                    ) : (
                        <>
                            Pending <i className='bx bx-hourglass' style={{ fontSize: '16px' }}></i>
                        </>
                    )}
                </p>
                <span className='font-space text-xs text-gray-500'>
                    {formatDate(createdAt)}
                </span>
            </div>

            <div className='flex gap-3'>
                <label className="flex items-center gap-2 cursor-pointer text-gray-700 font-space text-sm">
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={onComplete}
                        className="
                            w-6 h-6 
                            text-purple-600         
                            bg-gray-200             
                            border-gray-400         
                            rounded-md              
                            appearance-none         
                            cursor-pointer          
                            transition-all          
                            focus:ring-2            
                            focus:ring-purple-500   
                            checked:bg-purple-600   
                            checked:border-transparent 
                            checked:hover:bg-purple-700 
                        "
                        style={{
                            backgroundImage: completed
                                ? `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")`
                                : 'none',
                            backgroundSize: '80% 80%',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    />

                </label>
                <div className='flex flex-col'>
                    <h3 className={`font-space text-xl font-semibold ${textClasses}`}>{title}</h3>
                    <p className={`font-space text-gray-600 py-1 ${completed ? 'line-through' : ''}`}>{description}</p>
                </div>

            </div>



            <div className='flex justify-end items-center pt-2 mt-3'>
                <div className="flex gap-2">
                    <button
                        className='bg-red-500 hover:bg-red-600 text-white flex items-center gap-1 shadow-md font-space text-sm py-1 px-3 cursor-pointer rounded-xl transition'
                        onClick={onDelete}
                    >
                        Delete <i className='bx bx-trash' style={{ fontSize: '16px' }}></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TaskItem
