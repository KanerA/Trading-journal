import { Box, Typography } from "@mui/material";
import type { Trade } from "@trading-journal/shared";

interface TradeTotalDisplayProps {
    pnl: Trade["pnl"],
    returnPercent: Trade["returnPercent"]
}

const TradeTotalDisplay = ({ pnl, returnPercent }: TradeTotalDisplayProps) => {
    return (
        <Box sx={{ width: "100%", display: "flex" }}>
            <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ marginBottom: 1 }}>Total P&L</Typography>
                <Typography sx={{ color: `${+pnl > 0 ? "rgb(2, 176, 2)" : "rgb(247, 0, 0)"}` }}>${pnl.toFixed(2)}</Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ marginBottom: 1 }}>Avg. Return %</Typography>
                <Typography sx={{ color: `${+returnPercent > 0 ? "rgb(2, 176, 2)" : "rgb(247, 0, 0)"}` }}>{returnPercent.toFixed(2)}%</Typography>
            </Box>
        </Box>
    );
};

export default TradeTotalDisplay;