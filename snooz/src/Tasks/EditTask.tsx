import React from 'react';
import { TaskForm } from './TaskForm'

export function EditTask(props:{}) {
    
    return (
        <div>
            <h2>Edit Task</h2>
            <div>
                <TaskForm />
            </div>
        </div>
    )
}