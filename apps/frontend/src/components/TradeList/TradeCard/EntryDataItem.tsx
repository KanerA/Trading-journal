import { Box, Typography } from "@mui/material";

interface StatCardItemProps {
    label: string,
    value: string | number
}

const EntryDataItem = ({ label, value }: StatCardItemProps) => {
    return (
        <Box sx={{
            margin: "5px",
            flexGrow: 1,
            backgroundColor: "inherit",
        }}>
            <Typography sx={{
                color: "rgba(0,0,0,0.6)",
                marginBottom: "0.2rem",
            }}>
                {label}
            </Typography>
            <Typography fontWeight={700}>{value}</Typography>
        </Box>
    );
};

export default EntryDataItem;