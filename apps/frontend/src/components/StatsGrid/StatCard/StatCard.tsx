import { Box, Typography } from "@mui/material";

type StatCardProps = {
    label: string;
    value: string | number;
    color: "rgb(2, 176, 2)" | "rgb(247, 0, 0)" | "black"
};

const StatCard = ({ label, value, color }: StatCardProps) => {
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
            <Typography variant="h5" sx={{ fontWeight: "bold", color: label === "Win Rate" ? "black" : color }}>{value}</Typography>
        </Box>
    );
}

export default StatCard;
