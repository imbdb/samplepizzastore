import React from 'react'

import pizza from '../../assets/pizza.png'
import './Bepoz.css'

function Bepoz() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={pizza} className="App-logo" alt="logo" />
                <p>Welcome to Bepoz Pizza</p>
            </header>
        </div>
    )
}

export default Bepoz
