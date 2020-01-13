import React from 'react';
import './App.css';
import ReactNode from './components/ReactNode';
import { Provider } from './components/ReactDimensions';

const App = () => {
    return (
        <div className="myLayout">
            <div className="gridArea">
                <Provider>
                    <ReactNode />
                </Provider>
            </div>
        </div >)
}

export default App;