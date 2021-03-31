import React, { useState } from 'react';

export function TaskForm(props:{name?: string, date?: Date, comment?: string}) {
    const [taskName, setTaskName] = useState(props.name);
    const [taskDate, setTaskDate] = useState(props.date);
    const [taskComment, setTaskComment] = useState(props.comment);

    return (
        <div>
            <div className="task-typing">
                <label htmlFor="input_task">Task</label>
                <input id="input_task" type="text" value={taskName} onChange={event => setTaskName(event.target.value)}/>
            </div>
            
            <div className="date">
                <label htmlFor="input_date">Date and Time</label>
                <input id="input_date" type="datetime-local" value={taskDate?.toString()} onChange={event => setTaskDate(new Date(event.target.value))}/>
            </div> 

            <div className="task-typing">
                <label htmlFor="input_comment">Comments</label>
                <input id="input_comment" type="text" value={taskComment} onChange={event => setTaskComment(event.target.value)}/>
            </div>
 
            <div className="submit">
                <button onClick={() => console.log(taskName + ", " + taskDate + ", " + taskComment)}>Save</button>
            </div>
        </div>
    )
}