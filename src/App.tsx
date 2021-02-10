import React from 'react';
// @ts-ignore
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./pages/Home";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Albums from "./pages/Albums";
import AlbumIn from "./pages/AlbumIn";
import Header from "./components/Header/Header";

const App = () => {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/users" component={Users}/>
                <Route path="/posts" component={Posts}/>
                <Route path="/albums" component={Albums}/>
                <Route path="/album/:id" component={AlbumIn}/>
            </Switch>
        </Router>

    );
}

export default App;
