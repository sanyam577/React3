import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';

export default function Insurance() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
    const [policyName, setPolicyName] = useState('');
    const [policyPrice, setPolicyPrice] = useState(null);

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:2222/price/policyPrice/${policyName}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            });
            const data = await response.json();
            console.log("Received data:", data);
            setPolicyPrice(data); // Assuming the server returns the price in the 'price' field
        } catch (error) {
            console.error("Error fetching policy price:", error);
        }
    }

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{ color: "Red" }}>Policy price</h1>
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
                    <Button variant="contained" color="success" onClick={handleClick}>
                        Submit
                    </Button>
                </Box>
                {policyPrice !== null && (
                    <p>Policy Price: {policyPrice}</p>
                )}
            </Paper>
        </Container>
    );
}