import React from 'react';
import { TaskForm } from './TaskForm'

export function NewTask(props:{}) {
    
    return (
        <div>
            <h2>New Task</h2>
            <div>
                <TaskForm />
            </div>


        </div>
    )
}