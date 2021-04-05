import React from "react";
import {Task} from "../../models/Task";
import {ListGroup} from "react-bootstrap";

class TaskTab extends React.Component<{ tasks: Task[] }> {
    render() {
        return (
            <div className="TaskTab">
                <ListGroup>
                    {this.props.tasks.map((task) => (
                        <ListGroup.Item>
                            <ul>
                                <li>{task.name}</li>
                                <li>{task.date?.toString()}</li>
                                <li>{task.comment}</li>
                            </ul>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
        );
    }
}

export default TaskTab;
