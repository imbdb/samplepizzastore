import React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

import pizza from './assets/pizza.png'
import './App.css'
import { useNavigate } from 'react-router-dom'

function App() {
    const navigate = useNavigate()
    return (
        <div className="App">
            <header className="App-header">
                <img src={pizza} className="App-logo" alt="logo" />
                <p>Welcome to Bepoz Pizza</p>
                <Box sx={{ '& button': { m: 1 } }}>
                    <div>
                        <Button
                            variant="outlined"
                            onClick={() => {
                                navigate('/login')
                            }}>
                            Login
                        </Button>
                    </div>
                </Box>
            </header>
        </div>
    )
}

export default App
