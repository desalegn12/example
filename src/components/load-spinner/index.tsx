import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const StyledCircularProgress = styled(CircularProgress)(({ theme, ...props }) => ({
    color: theme.palette.primary.main,
    width: '100px !important',
    height: '100px !important',
}));

const CircularIndeterminate = () => {
    return (
        <Box 
            sx={{ 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.2)', // black with 80% opacity
                zIndex: 9999,
            }}
        >
            <StyledCircularProgress />
        </Box>
    );
}

export default CircularIndeterminate;