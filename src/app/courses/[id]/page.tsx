'use client';
import * as React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useParams } from 'next/navigation';

export default function about() {
    const param = useParams();
    const newsId = param?.id; 
    return(
        <Box mx={30}>
            <Typography >
                id: {param.id}
            </Typography>
        </Box>
    );
}