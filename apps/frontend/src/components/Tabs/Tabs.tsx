import { Box } from "@mui/material";
import type { Trade } from "@trading-journal/shared";
import { useState } from "react";
import EmptyState from "../EmptyState";
import TradeList from "../TradeList/TradeList";
import TabsButton from "./TabsButton";

interface TabsProps {
    trades: Trade[]
}

enum TabsOptions {
    trades = "Trades",
    analytics = "Analytics"
}

const Tabs = ({ trades }: TabsProps) => {
    const [displaySectionSelector, setDisplaySectionSelector] = useState<TabsOptions>(TabsOptions.trades);

    return (
        <Box sx={{
            marginTop: '0.5rem',
            width: '100%',
        }}>
            <Box sx={{
                width: '100%',
                display: 'flex',
                margin: 'auto',
            }}>
                <TabsButton label={"Trades"} onClick={() => setDisplaySectionSelector(TabsOptions.trades)} variant={`${displaySectionSelector === TabsOptions.trades ? "contained" : "outlined"}`} />
                <TabsButton label={"Analytics"} onClick={() => setDisplaySectionSelector(TabsOptions.analytics)} variant={`${displaySectionSelector === TabsOptions.analytics ? "contained" : "outlined"}`} />
            </Box>
            {displaySectionSelector === TabsOptions.trades && <TradeList trades={trades} />}
            {displaySectionSelector === TabsOptions.analytics && <EmptyState />}
        </Box>
    );
}

export default Tabs;
