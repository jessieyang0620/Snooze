import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Container} from "react-bootstrap";
import Login from "./components/logistics/Login";
import Welcome from "./components/logistics/Welcome";
import SignUp from "./components/logistics/SignUp";
import Dashboard from "./components/logistics/Dashboard";

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
