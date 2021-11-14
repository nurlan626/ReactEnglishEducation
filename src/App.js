import React from 'react';
import './App.css';
import TodoBox from './components/TodoBox.js';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    render() {
        return (
            <div >
            <TodoBox />
            </div>
        );
    }
}

export default App;
