import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Box, Chip, IconButton } from "@mui/material";

interface TradeFormExitHeaderProps {
    number: number
}

const TradeFormExitHeader = ({ number }: TradeFormExitHeaderProps) => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: '1rem 2rem 1rem 2rem'
        }}>
            <Chip variant="outlined" size="small" label={`Exit #${number}`} />
            <IconButton sx={{ width: "3rem", padding: 0, borderRadius: 0 }} component="a" onClick={() => alert("HELLO " + number)}>
                <DeleteOutlineIcon sx={{ width: "3rem", padding: 0 }} />
            </IconButton>
        </Box>
    );
};

export default TradeFormExitHeader;