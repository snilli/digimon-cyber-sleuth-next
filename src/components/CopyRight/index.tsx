import React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

const Copyright: React.FC = (): JSX.Element => {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <MuiLink color="inherit" href="https://google.com">
                Hello Company
            </MuiLink>{' '}
            {new Date().getFullYear()}.
        </Typography>
    );
}

export default Copyright;
