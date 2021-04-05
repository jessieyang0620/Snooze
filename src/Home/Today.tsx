import React, {useState} from 'react';
import {Task} from '../models/Task';
import {Symptom} from '../models/Symptom';

export function Today(props: { tasks: Task[], symptoms: Symptom[] }) {
    //tab = 0 -> task tab
    //tab = 1 -> health tab
    const [tab, setTab] = useState(0);
    //actual tabs can be fixed thru formatting...?
    //tabs for health and tasks
    const header = <div>
        <button onClick={() => setTab(0)}>Tasks</button>
        <button onClick={() => setTab(1)}>Health</button>
    </div>

    if (tab == 0) {
        return (<div>
            {header}
            <TaskTab tasks={props.tasks}/>
        </div>)
    } else {
        return (<div>
            {header}
            <HealthTab symptoms={props.symptoms}/>
        </div>)
    }
}

export function TaskTab(props: { tasks: Task[] }) {
    //{props.tasks.map((task, i) => React.createElement(task, { key: i}))}
    return (
        <div>
            <ul className="list-task">
                {props.tasks.map((task, i) => (
                    <li key={i}>
                        <ul>
                            <li>{task.name}</li>
                            <li>{task.date?.toString()}</li>
                            <li>{task.comment}</li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function HealthTab(props: { symptoms: Symptom[] }) {
    return (
        <div>
            <ul className="list-task">
                {props.symptoms.map((symp, i) => (
                    <li key={i}>
                        <ul>
                            <li> {symp.name} </li>
                            <li>{symp.severity} </li>
                            <li>{symp.why} </li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}