import { Box, Typography } from "@mui/material";

type StatCardProps = {
    label: string;
    value: string | number;
    isWin?: boolean
};

const StatCard = ({ label, value, isWin }: StatCardProps) => {
    return (
        <Box sx={{
            margin: "1rem 0",
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            height: '7rem',
            backgroundColor: '#fff',
            padding: '0.2rem 2rem',
            borderRadius: '10px',
        }}>
            <Typography>{label}</Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: !(typeof isWin === "boolean") ? "black" : isWin ? "rgb(2, 176, 2)" : "rgb(247, 0, 0)" }}>{value}</Typography>
        </Box>
    );
}

export default StatCard;
