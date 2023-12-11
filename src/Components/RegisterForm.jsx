// RegisterForm.js
import React, { useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import "../App.css";


const RegisterForm = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [registrationStatus, setRegistrationStatus] = useState(null);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send a POST request to the backend API with the registration data
        fetch('http://localhost:8080/api/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, address, phone, email }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                // Handle the response from the backend
                console.log('Registration successful:', data);
                setRegistrationStatus('success');
            })
            .catch((error) => {
                console.error('Error:', error);
                setRegistrationStatus('error');
            });
    };


    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <TextField
                                variant="outlined"
                                label="Name"
                                type="text"
                                value={name}
                                onChange={handleNameChange}
                                required
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                variant="outlined"
                                label="Address"
                                type="text"
                                value={address}
                                onChange={handleAddressChange}
                                required
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                variant="outlined"
                                label="Phone"
                                type="text"
                                value={phone}
                                onChange={handlePhoneChange}
                                required
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                variant="outlined"
                                label="Email"
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" type="submit">
                                Register
                            </Button>
                        </Grid>
                        {registrationStatus === 'success' && (
                            <Grid item>
                                <p>Registration successful!</p>
                            </Grid>
                        )}
                        {registrationStatus === 'error' && (
                            <Grid item>
                                <p>Registration failed!</p>
                            </Grid>
                        )}

                    </Grid>

                </form>
            </div>
            <div />
        </div>
    );
};

export default RegisterForm;
