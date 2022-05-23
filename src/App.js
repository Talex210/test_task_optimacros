import React from 'react';
import './App.css';

function App() {
    return (
        <div className='app-wrapper'>
            <div className='list-elements'>
                <p>label</p>
                <p>id</p>
                <p>more</p>
            </div>
            <div className='additional-information'>Дополнительная информация об элементе</div>
            <div className='buttons'>
                <button style={{marginRight: '10px'}}>Refresh</button>
                <button>Remove</button>
            </div>
        </div>
    );
}

export default App;
