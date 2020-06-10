import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const PracticeStateObject = props => {

    const [state, setState] = useState(
        {
            lenguajes: [
                { id: 1, nombre: "JavaScript", status: true, stack: "front" },
                { id: 2, nombre: "Java", status: true, stack: "back" },
                { id: 3, nombre: "PHP", status: true, stack: "back" },
                { id: 4, nombre: "Python", status: true, stack: "back" },
                { id: 5, nombre: "C#", status: true, stack: "back" },
                { id: 6, nombre: "C++", status: true, stack: "back" },
                { id: 7, nombre: "Ruby", status: false, stack: "back" },
                { id: 8, nombre: "CSS", status: false, stack: "front" },
                { id: 9, nombre: "C", status: true, stack: "back" },
                { id: 10, nombre: "Objective C", status: true, stack: "back" },
                { id: 11, nombre: "Perl", status: true, stack: "back" },
                { id: 12, nombre: "Shell", status: true, stack: "bash" },
                { id: 13, nombre: "R", status: true, stack: "back" },
                { id: 14, nombre: "Scala", status: true, stack: "back" },
                { id: 15, nombre: "Go", status: true, stack: "back" },
                { id: 16, nombre: "Haskell", status: true, stack: "front" },
                { id: 17, nombre: "Matlab", status: true, stack: "front" },
                { id: 18, nombre: "Swift", status: true, stack: "back" },
                { id: 19, nombre: "Clojure", status: true, stack: "back" },
                { id: 20, nombre: "Groovy", status: true, stack: "back" },
                { id: 21, nombre: "Visual Basic", status: true, stack: "back" },
                { id: 22, nombre: "Assembler", status: true, stack: "back" }
            ],
            filter: '',
            status_active: true,
            status_inactive: true,
        }
    )

    const handleChange = e => {
        console.log(e.target.value)
        let update = {
            //filter: e.target.value
            [e.target.name]: e.target.value
        }
        setState(prevState => {
            return { ...prevState, ...update }
        })

        /* setState({
            ...state,
            //filter: e.target.value
            [e.target.name]: e.target.value
        }) */
    }

    const handleChangeCheckBoxes = e => {
        console.log(e.target.checked)
        let update = {
            //filter: e.target.value
            [e.target.name]: e.target.checked
        }
        setState(prevState => {
            return { ...prevState, ...update }
        })

        /* setState({
            ...state,
            //filter: e.target.value
            [e.target.name]: e.target.value
        }) */
    }



    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <br />
            </header>
            <main>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label>
                        Filter: &nbsp;
                        <input type="text" name="filter" placeholder="Search" onChange={(e) => handleChange(e)} />
                    </label><br />
                    <label>
                        Status: &nbsp;
                        <input type="checkbox" name="status_active" defaultChecked={state.status_active ? true : false} onChange={(e) => handleChangeCheckBoxes(e)} /> Activo &nbsp;
                    </label>
                    <label>
                        <input type="checkbox" name="status_inactive" defaultChecked={state.status_inactive ? true : false} onChange={(e) => handleChangeCheckBoxes(e)} /> Inactivo
                    </label>
                </form>
                <ul style={{ textAlign: "left" }}>
                    {
                        !!state.lenguajes &&
                        state.lenguajes.length > 0 &&
                        state.lenguajes
                            .filter((lenguaje, index, arr) => {
                                return (
                                    lenguaje.nombre.toLowerCase().includes(state.filter.toLowerCase())
                                    || lenguaje.stack.toLowerCase().includes(state.filter.toLowerCase())
                                );
                            })
                            .filter((lenguaje, index, arr) => {
                                return (state.status_active && lenguaje.status === true) || (state.status_inactive && lenguaje.status === false);
                            })
                            .map((lenguaje, index, arr) => {
                                return <li key={index}>{lenguaje.nombre} - ({lenguaje.stack})</li>;
                            })
                    }
                </ul>
            </main>
        </div>
    )
}

export default PracticeStateObject;