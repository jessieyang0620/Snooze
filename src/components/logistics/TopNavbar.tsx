import React from "react";
import {Navbar} from "react-bootstrap";

class TopNavbar extends React.Component {
    render() {
        return (
            <div className="TopNavbar">
                <Navbar>
                    <Navbar.Brand>Snooz</Navbar.Brand>
                </Navbar>
            </div>
        );
    }
}

export default TopNavbar;
