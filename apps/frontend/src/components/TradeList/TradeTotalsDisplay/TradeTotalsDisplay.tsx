import { Box, Typography } from "@mui/material";
import type { Trade } from "@trading-journal/shared";
import { Colors } from "../../../enums/colors";

interface TradeTotalDisplayProps {
    pnl: Trade["pnl"],
    returnPercent: Trade["returnPercent"]
}

const TradeTotalDisplay = ({ pnl, returnPercent }: TradeTotalDisplayProps) => {
    return (
        <Box sx={{ width: "100%", display: "flex" }}>
            <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ marginBottom: 1 }}>Total P&L</Typography>
                <Typography sx={{ color: `${+pnl > 0 ? Colors.Win : Colors.Lose}` }}>${pnl.toFixed(2)}</Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ marginBottom: 1 }}>Avg. Return %</Typography>
                <Typography sx={{ color: `${+returnPercent > 0 ? Colors.Win : Colors.Lose}` }}>{returnPercent.toFixed(2)}%</Typography>
            </Box>
        </Box>
    );
};

export default TradeTotalDisplay;