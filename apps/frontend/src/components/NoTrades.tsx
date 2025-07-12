import { Box, Typography } from '@mui/material';

const NoTrades = () => {
    return (
        <Box>
            <Typography
                variant="h6"
                sx={{
                    textAlign: 'center',
                    marginTop: '2rem',
                    color: 'text.secondary',
                }}
            >
                No trades found. Please add some trades to get started.
            </Typography>
        </Box>
    );
};

export default NoTrades;