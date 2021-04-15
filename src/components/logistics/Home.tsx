import React, {Component} from "react";
import BottomNavbar from "./BottomNavbar";
import TopNavbar from "./TopNavbar";
import {Card, Form} from "react-bootstrap";

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <TopNavbar/>
                <h2>Today's Snapshot</h2>
                <Card>
                    <Card.Title>To-Do:</Card.Title>
                    <Card.Body>
                        <Form>
                            <Form.Check
                                label="Some task text"
                            />
                            <Form.Check
                                label="task 2"
                            />
                        </Form>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Title>Daily Symptoms:</Card.Title>
                    <Card.Body>
                        <Form>
                            <Form.Check
                                label="Some symptom text"
                            />
                            <Form.Check
                                label="symptom 2"
                            />
                        </Form>
                    </Card.Body>
                </Card>
                <BottomNavbar/>
            </div>
        );
    }
}
