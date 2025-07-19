import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Box, Chip, IconButton } from "@mui/material";

interface TradeFormExitHeaderProps {
    index: number,
    onClickDeleteExit: (index: number) => void
}

const TradeFormExitHeader = ({ index, onClickDeleteExit }: TradeFormExitHeaderProps) => {

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: '1rem 2rem 1rem 2rem'
        }}>
            <Chip variant="outlined" size="small" label={`Exit #${index}`} />
            <IconButton sx={{ width: "3rem", padding: 0, borderRadius: 0 }} component="a" onClick={() => onClickDeleteExit(index)}>
                <DeleteOutlineIcon sx={{ width: "3rem", padding: 0 }} />
            </IconButton>
        </Box>
    );
};

export default TradeFormExitHeader;