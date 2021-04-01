import React, {Component} from "react";
import {Button, FormControl, FormGroup, FormLabel} from "react-bootstrap";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <FormGroup>
                    <FormLabel>Email address</FormLabel>
                    <FormControl type="username" placeholder="Enter username"/>
                </FormGroup>

                <FormGroup>
                    <FormLabel>Password</FormLabel>
                    <FormControl type="password" placeholder="Enter password"/>
                </FormGroup>

                <Button type="submit" variant="primary" block href="/dashboard">Sign Up</Button>
            </form>
        );
    }
}
