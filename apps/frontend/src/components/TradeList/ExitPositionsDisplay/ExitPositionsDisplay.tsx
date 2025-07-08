import { Box, Typography } from "@mui/material";
import type { Trade } from "@trading-journal/shared";

interface ExitPositionsDisplayProps {
    exits: Trade["exits"]
}

const sharedTypographySx = {
    flexGrow: 1,
    display: "flex",
}

// TODO: repeated background color "#eff4ff"

const ExitPositionsDisplay = ({ exits }: ExitPositionsDisplayProps) => {
    return (
        <Box>
            <Typography variant="h5">Exit Positions</Typography>
            {exits.length > 0 && exits.map((exit, index) => (
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    height: "2rem",
                    width: "90%",
                    margin: "0 auto 0.5rem",
                    paddingLeft: "1rem",
                    backgroundColor: "#eff4ff",
                }}>
                    {/** TODO: Combine all to const or something to map instead of hard coded */}
                    <Typography sx={sharedTypographySx}>Exit #{index + 1}: </Typography><Typography fontWeight="bold">${exit.price.toFixed(2)}</Typography>
                    <Typography sx={sharedTypographySx}>Amount: </Typography><Typography fontWeight="bold">{exit.amount} shares</Typography>
                    <Typography sx={sharedTypographySx}>Date: </Typography><Typography fontWeight="bold">{exit.date.toString()}</Typography>
                </Box>
            ))}

            {exits.length === 0 && <Box>No Exits</Box>}
        </Box>
    );
};

export default ExitPositionsDisplay;