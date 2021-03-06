import React from "react";
import { render } from 'react-dom';
import {Link, Router} from '@reach/router';
import Results from './Results.js'
import Details from "./Details";

class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <Link to="/">
                        Adopt Me!
                    </Link>
                </header>
                <Router>
                    <Results path="/"/>
                    <Details path="/details/:id"/>
                </Router>
            </div>
        )
    }
}



render(<App />, document.getElementById("root"));
