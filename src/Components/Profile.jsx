import React, { useEffect, useState } from "react"
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'

const API_URL = 'http://localhost:8080/api/customers/search/findByName?name=';

const Profile = () => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState({});
    const [name, setName] = useState('')
    const [error, setError] = useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleInputChange = (event) => {
        setName(event.target.value);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const getUser = async () => {
        try {
            const response = await fetch(API_URL + name)
            if (!response.ok) {
                alert('User not found!')
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log(data)
            setUser(data);
            setLoggedIn(true)
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('An error occurred while fetching data');
        }
    };

    const deleteProfile = async () => {
        try {
            const response = await fetch(user._links.self.href, { method: 'DELETE' })
            if (!response.ok) {
                throw new Error('Failed to delete profile');
            }
            alert('Profile was deleted successfully!')
        } catch (error) {
            console.error('Error deleting data:', error);
            setError('An error occurred while deleting data');
        } finally {
            setLoggedIn(false);
            setOpen(false);
        }
    };

    return (
        <div>
            {!loggedIn && (
                <div>
                    <p>You are not logged in!</p>
                    <Button variant='outlined' onClick={handleClickOpen}>
                        Log In
                    </Button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                    >
                        <DialogTitle>
                            Log In
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText component={'span'}>
                                <TextField
                                    autoFocus
                                    margin='dense'
                                    id='name'
                                    label='Name'
                                    value={name}
                                    onChange={handleInputChange}
                                    fullWidth
                                    variant='standard'
                                />
                                <TextField
                                    margin='dense'
                                    id='password'
                                    label='Password'
                                    fullWidth
                                    variant='standard'
                                />
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={getUser} autoFocus>
                                Log In
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            )}
            {loggedIn && (
                <>
                    <div>
                        <p>You are logged in as: {user.name}</p>
                    </div>
                    <div>
                        <Button onClick={deleteProfile}>Request profile removal</Button>
                        <p>NOTE: This will actually delete the user (or customer) data from the database!</p>
                    </div>
                </>
            )}
        </div>
    )

}

export default Profile