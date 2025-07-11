import { Box, Button, Typography } from '@mui/material';
import type { NewTradeFields } from '@trading-journal/shared';
import { useState } from 'react';
import { type Control, type FieldErrors } from 'react-hook-form';
import TradeFormExits from '../TradeFormExits/TradeFormExits';

interface TradeFormExitsContainerProps {
    control: Control<NewTradeFields>
    errors: FieldErrors<NewTradeFields>["exits"]
    exits: NewTradeFields["exits"]

}

const TradeFormExitsContainer = ({ control, errors, exits }: TradeFormExitsContainerProps) => {
    const [exitsState, setExitsState] = useState<NewTradeFields["exits"]>(exits || []);

    // This function can be used to add a new exit position 
    const addNewExit = () => {
        const newExit = {
            price: 0,
            amount: 0,
            date: new Date(),
        };
        setExitsState([...exitsState, newExit]);
    }
    return (
        <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "0.8rem" }}>
                <Typography variant="h5">
                    Add Exit Positions
                </Typography>
                <Button variant="contained" onClick={() => addNewExit()}>
                    + Add New Exit
                </Button>
            </Box>
            <TradeFormExits control={control} errors={errors} exits={exitsState} />
            <Box>
                <Button type="submit" variant="contained" color="primary">
                    Submit Trade
                </Button>
            </Box>
        </Box>
    );
};

export default TradeFormExitsContainer;