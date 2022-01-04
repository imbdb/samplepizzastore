import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import { useAppSelector, useAppDispatch } from '../state/hooks'
import { checkAuth, User } from '../services/authservice'
import { logout } from '../state/customer/AuthSlice'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const auth = useAppSelector((state) => state.auth.loggedIn)
    const user = useAppSelector((state) => state.auth.user)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null)
    checkAuth(auth)
    const handleMenu = (event: any) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleLogout = () => {
        dispatch(logout())
        setAnchorEl(null)
        navigate('/')
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}>
                        Bepoz Pizza
                    </Typography>
                    {auth && (
                        <div>
                            <Typography
                                variant="h6"
                                component="span"
                                style={{ verticalAlign: 'middle' }}>
                                {(user as User).name}
                            </Typography>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit">
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}>
                                <MenuItem onClick={handleLogout}>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    )
}
