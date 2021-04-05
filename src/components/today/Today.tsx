import React from 'react';
import {Task} from '../../models/Task';
import {Symptom} from '../../models/Symptom';
import TaskTab from "./TaskTab";
import HealthTab from "./HealthTab";
import BottomNavbar from "../logistics/BottomNavbar";
import {Nav} from "react-bootstrap";

class Today extends React.Component<{ tasks: Task[], symptoms: Symptom[] }, { tab: number }> {
    constructor(props: { tasks: Task[]; symptoms: Symptom[]; }) {
        super(props);
        //tab = 0 -> task tab
        //tab = 1 -> health tab
        this.state = {tab: 0}
    }

    render() {
        const handleSelect = (eventKey: string | null) => this.setState({tab: Number(eventKey)});
        let mainContent;
        if (this.state.tab === 0) {
            mainContent = <TaskTab tasks={this.props.tasks}/>
        } else {
            mainContent = <HealthTab symptoms={this.props.symptoms}/>
        }
        return (
            <div className="Today">
                <Nav justify variant="tabs" onSelect={handleSelect} defaultActiveKey="0">
                    <Nav.Item>
                        <Nav.Link eventKey="0">Tasks</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="1">Health</Nav.Link>
                    </Nav.Item>
                </Nav>
                {mainContent}
                <BottomNavbar/>
            </div>
        )
    }
}

export default Today;
