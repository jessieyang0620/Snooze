import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Container} from "react-bootstrap";
import Login from "./components/logistics/Login";
import Welcome from "./components/logistics/Welcome";
import SignUp from "./components/logistics/SignUp";
import Home from "./components/logistics/Home";
import Today from "./components/today/Today";
import Calendar from "./components/calendar/Calendar";
import {task1, task2} from "./models/Task";

class App extends React.Component {
    render() {
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
                            <Route path="/home">
                                <Home/>
                            </Route>
                            <Route path="/today">
                                <Today tasks={[task1, task2]} symptoms={[]}/>
                            </Route>
                            <Route path="/calendar">
                                <Calendar/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </Container>
        );
    }
}

export default App;
