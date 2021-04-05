import React from "react";
import {Symptom} from "../../models/Symptom";
import {ListGroup} from "react-bootstrap";

class HealthTab extends React.Component<{ symptoms: Symptom[] }> {
    render() {
        return (
            <div className="HealthTab">
                <ListGroup>
                    {this.props.symptoms.map((symp) => (
                        <ListGroup.Item>
                            <ul>
                                <li> {symp.name} </li>
                                <li>{symp.severity} </li>
                                <li>{symp.why} </li>
                            </ul>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
        );
    }
}

export default HealthTab;
