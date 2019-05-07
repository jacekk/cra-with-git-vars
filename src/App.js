import React from 'react';
import logo from './logo.svg';
import './App.css';

const dumpEnvs = (ev) => {
    ev.preventDefault();

    console.log(
        'START',
        '\nNOW',
        process.env.NOW,
        '\nREACT_APP_GIT_LAST_TAG',
        process.env.REACT_APP_GIT_LAST_TAG,
        '==\nREACT_APP_GIT_STATUS',
        process.env.REACT_APP_GIT_STATUS,
        '==\nGIT_CURRENT_BRANCH',
        process.env.GIT_CURRENT_BRANCH,
        '==\nGIT_STATUS_VERBOSE',
        process.env.GIT_STATUS_VERBOSE,
        '==\nEND',
    );
};

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <a
                    className="App-link"
                    href="/"
                    onClick={dumpEnvs}
                    rel="noopener noreferrer"
                >
                    Alert envs
                </a>
                <pre>{}</pre>
            </header>
        </div>
    );
}

export default App;
