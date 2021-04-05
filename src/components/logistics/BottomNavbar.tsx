import React from "react";
import {Nav} from "react-bootstrap";

class BottomNavbar extends React.Component {
    render() {
        return (
            <div className="BottomNavbar">
                <Nav justify defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/today">Today</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/calendar">Calendar</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        );
    }
}

export default BottomNavbar;
