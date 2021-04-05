import React, {useState} from 'react';
import {Task} from '../../models/Task';

export function TaskForm(props: { task: Task }) {
    const [taskName, setTaskName] = useState(props.task.name);
    const [taskDate, setTaskDate] = useState(props.task.date);
    const [taskComment, setTaskComment] = useState(props.task.comment);

    return (
        <div>
            <div className="task-typing">
                <label htmlFor="input_task">Task</label>
                <input id="input_task" type="text" value={taskName}
                       onChange={event => setTaskName(event.target.value)}/>
            </div>

            <div className="date">
                <label htmlFor="input_date">Date and Time</label>
                <input id="input_date" type="datetime-local" value={taskDate?.toString()}
                       onChange={event => setTaskDate(new Date(event.target.value))}/>
            </div>

            <div className="task-typing">
                <label htmlFor="input_comment">Comments</label>
                <input id="input_comment" type="text" value={taskComment}
                       onChange={event => setTaskComment(event.target.value)}/>
            </div>

            <div className="submit">
                <button
                    onClick={() => console.log(taskName + ", " + taskDate + ", " + taskComment)}>Save
                </button>
            </div>
        </div>
    )
}