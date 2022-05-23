import React from 'react';
import './App.css';
import ListElementsContainer from './Components/ListElementsContainer';

function App() {
    return (
        <div className='app-wrapper'>
            <ListElementsContainer/>
            <div className='additional-information'>Дополнительная информация об элементе</div>
            <div className='buttons'>
                <button style={{marginRight: '10px'}}>Refresh</button>
                <button>Remove</button>
            </div>
        </div>
    );
}

export default App;
