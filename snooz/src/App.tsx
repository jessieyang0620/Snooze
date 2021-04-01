import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./containers/logistics/Login";
import Welcome from "./containers/logistics/Welcome";
import {Container} from "react-bootstrap";
import SignUp from "./containers/logistics/SignUp";
import Dashboard from "./containers/logistics/Dashboard";

function App() {
    return (
        <Container fluid="sm">
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Welcome/>
                        </Route>
                        <Route path="/login">
                            <Login/>
                        </Route>
                        <Route path="/sign-up">
                            <SignUp/>
                        </Route>
                        <Route path="/dashboard">
                            <Dashboard/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Container>
    );
}

export default App;
