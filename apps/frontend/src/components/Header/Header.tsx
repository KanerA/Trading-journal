import { Box, Button, Card, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { TradeModalTitles } from "../../enums/tradeModal";
import { openModal } from "../../store/reducers/modalSlice";


export default function Header() {
    const dispatch = useDispatch();

    const openModalHandler = (title: TradeModalTitles) => {
        dispatch(openModal(title))
    }
    return (
        <Card
            sx={{
                display: 'flex',
                position: 'sticky',
                top: "0",
                left: "0",
                justifyContent: "space-between",
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
            <Button variant="contained" onClick={() => openModalHandler(TradeModalTitles.CreateTrade)}>
                + Add New Trade
            </Button>
        </Card>
    )
}
