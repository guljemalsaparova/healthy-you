import React from 'react';
import { Box, Button, IconButton, Divider, TextField, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Contact(props)
{
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '520px', margin: '0 auto' }}>
            <Divider sx={{ width: '100%' }} component="div" role="presentation">
                <Typography sx={{margin: '20px'}} variant="h3">Healthy You</Typography>
            </Divider>

            {/* Icons */}
            <Box>
                <IconButton size="large">
                    <FacebookIcon  fontSize="inherit" />
                </IconButton>
                <IconButton size="large">
                    <TwitterIcon fontSize="inherit" />
                </IconButton>
                <IconButton size="large">
                    <PinterestIcon fontSize="inherit" />
                </IconButton>
            </Box>
            
            <Typography sx={{ marginTop: '30px' }} variant="h5" gutterBottom>Weekly newsletter</Typography>
            <TextField
                sx={{ width: '100%' }}
                label="Email"
                placeholder="name@email.com"
            />

            <Button 
                sx={{ width: '100%', marginTop: '4px' }}
                variant="contained"
                size="large"
                onClick={() => {}}>
                Subscribe
            </Button>
        </Box>
    )
}
