import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {FormControl, FormGroup, FormLabel} from "react-bootstrap";

class Login extends React.Component {
    render() {
        return (
            <div className="Login">
                <Form>
                    <h3>Login</h3>

                    <FormGroup>
                        <FormLabel>Email address</FormLabel>
                        <FormControl type="username" placeholder="Enter username"/>
                    </FormGroup>

                    <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormControl type="password" placeholder="Enter password"/>
                    </FormGroup>

                    <Button type="submit" variant="primary" href="/home">Submit</Button>
                </Form>
            </div>
        );
    }
}

export default Login;
