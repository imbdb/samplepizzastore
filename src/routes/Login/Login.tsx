import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import { Button, FormGroup } from '@mui/material'
import { Bepoz } from '../../components'
import { User, checkLogin } from '../../services/authservice'
import { useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../state/hooks'
import { login } from '../../state/customer/AuthSlice'

interface LoginProps {
    email: string
    password: string
}

function Login() {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const loggedIn = useAppSelector((state) => state.auth.loggedIn)
    const dispatch = useAppDispatch()

    let navigate = useNavigate()

    if (loggedIn) {
        navigate('/home')
    }

    const handleSubmit = (event: React.MouseEvent) => {
        event.preventDefault()
        if (username === '' || password === '') {
            alert('Please fill in all fields')
            return
        }
        const loginReq: LoginProps = {
            email: username,
            password: password,
        }
        let u = checkLogin(loginReq)
        if (u) {
            dispatch(login(u))
            navigate('/home')
        } else {
            alert('Login failed')
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        if (name === 'username') {
            setUsername(value)
        } else if (name === 'password') {
            setPassword(value)
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item md={8}>
                    <Bepoz />
                </Grid>
                <Grid item md={4}>
                    <Box sx={{ p: 2 }}>
                        <h1 style={{ textAlign: 'center' }}>Login</h1>
                        <FormGroup>
                            <TextField
                                required
                                id="username"
                                label="Username"
                                placeholder="Batman"
                                sx={{ mb: 1 }}
                                name="username"
                                value={username}
                                onChange={handleChange}
                            />
                            <TextField
                                required
                                id="password"
                                label="Password"
                                type={'password'}
                                placeholder="Alfred"
                                sx={{ mb: 1 }}
                                name="password"
                                value={password}
                                onChange={handleChange}
                            />
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={handleSubmit}
                                size="large">
                                Login
                            </Button>
                        </FormGroup>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Login
