import React from 'react';
import {TaskForm} from './TaskForm';
import {Task} from '../../models/Task';

export function NewTask(props: { task: Task }) {

    return (
        <div>
            <h2>New Task</h2>
            <div>
                <TaskForm task={props.task}/>
            </div>


        </div>
    )
}