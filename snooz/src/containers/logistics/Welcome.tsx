import React from "react";
import Button from "react-bootstrap/Button";
import {Col, Row} from "react-bootstrap";

export default function Welcome() {
    return (
        <div className="Welcome text-center">
            <h1>Welcome to Snooze</h1>

            <Row>
                <Col className="text-center">
                    <Button
                        variant="primary"
                        href="/login"
                        size="lg"
                    >
                        Login
                    </Button>
                </Col>
            </Row>

            <Row>
                <Col className="text-center">
                    <Button
                        variant="secondary"
                        href="/sign-up"
                        size="lg"
                    >
                        Sign Up
                    </Button>
                </Col>
            </Row>
        </div>
    );
}
