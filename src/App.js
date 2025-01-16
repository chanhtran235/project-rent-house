import './App.css';
import React from 'react'
import ListComponent from "./components/rents/ListComponent";
import MinhDepTrai from "./components/minh/minhdeptrai";

function App() {
    return (
        <div className="App">
            <h1>Minh's Calculator</h1>
            <MinhDepTrai/>
            <ListComponent/>
        </div>
    )
}

export default App;