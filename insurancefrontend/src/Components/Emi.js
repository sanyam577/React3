import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';

export default function Emi() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" };
    const [policyName, setPolicyName] = useState('');
    const [time, setTime] = useState('');
    const [emi, setEmi] = useState('');

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:1111/calc/calculate/${policyName}/${time}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            });
            const data = await response.text(); // Get the response as text

            // Update state with the calculated EMI
            setEmi(data);
        } catch (error) {
            console.error("Error fetching EMI:", error);
        }
    }

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{ color: "Red" }}>Calculate EMI</h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-basic"
                        label="Policy Name"
                        variant="outlined"
                        fullWidth
                        value={policyName}
                        onChange={(e) => setPolicyName(e.target.value)}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Time Period"
                        variant="outlined"
                        fullWidth
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                    <Button variant="contained" color="success" onClick={handleClick}>
                        Calculate EMI
                    </Button>
                </Box>
                {emi !== '' && (
                    <p>EMI: {emi}</p>
                )}
            </Paper>
        </Container>
    );
}

