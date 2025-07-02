import { Box, Button, Card, Typography } from "@mui/material";

interface HeaderProps {
    openModal: () => void;
}

export default function Header({ openModal }: HeaderProps) {
    return (
        <Card
            sx={{
                display: 'flex',
                position: 'sticky',
                top: "0",
                left: "0",
                justifyContent: "space-between",
                bgColor: "#f8f8fa",
                height: "10vh",
                boxSizing: "border-box",
                borderRadius: 0,
                zIndex: 2,
                padding: "1vw 1.8vw 1vw 1vw",
            }}
            elevation={0}
        >
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
                <Box>
                    <Typography sx={{ fontSize: "1.5rem", fontWeight: 600 }}>Trading Journal</Typography>
                    <Typography>Track and analyze your stock trades</Typography>
                </Box>
            </Box>
            <Button variant="contained" onClick={openModal}>
                + Add New Trade
            </Button>
        </Card>
    )
}
