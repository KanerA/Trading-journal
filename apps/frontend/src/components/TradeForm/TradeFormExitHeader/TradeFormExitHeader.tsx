import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Box, Chip, IconButton } from "@mui/material";

interface TradeFormExitHeaderProps {
    exitNumber: number,
    onClickDeleteExit: (index: number) => void
}

const TradeFormExitHeader = ({ exitNumber, onClickDeleteExit }: TradeFormExitHeaderProps) => {

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: '1rem 2rem 1rem 2rem'
        }}>
            <Chip variant="outlined" size="small" label={`Exit #${exitNumber}`} />
            <IconButton sx={{ width: "3rem", padding: 0, borderRadius: 0 }} component="a" onClick={() => onClickDeleteExit(exitNumber - 1)}>
                <DeleteOutlineIcon sx={{ width: "3rem", padding: 0 }} />
            </IconButton>
        </Box>
    );
};

export default TradeFormExitHeader;