import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

const Spinner = (props) => {
    return (
        <Stack sx={{
            color: 'grey.500',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: "20vh auto"
        }} spacing={2} direction="row">
            <CircularProgress color="inherit" />
        </Stack>
    );
}


export default Spinner;
