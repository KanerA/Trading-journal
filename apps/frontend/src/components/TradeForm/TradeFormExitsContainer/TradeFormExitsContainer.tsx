import { Box, Button, Typography } from '@mui/material';
import type { NewTradeFields } from '@trading-journal/shared';
import { format } from 'date-fns';
import { useState } from 'react';
import { type Control, type FieldErrors } from 'react-hook-form';
import TradeFormExits from '../TradeFormExits/TradeFormExits';

interface TradeFormExitsContainerProps {
    control: Control<NewTradeFields>
    errors: FieldErrors<NewTradeFields>["exits"]
}

const TradeFormExitsContainer = ({ control, errors }: TradeFormExitsContainerProps) => {
    const [defaultStateExits] = useState<NewTradeFields["exits"]>([{
        price: 50,
        date: format(new Date(), "dd/MM/yyyy"),
        amount: 0,
    }]);
    const [exitsState, setExitsState] = useState<NewTradeFields["exits"]>(defaultStateExits || []);

    // This function can be used to add a new exit position 
    const addNewExit = () => {
        const newExit = {
            price: 0,
            amount: 0,
            date: format(new Date(), "dd/MM/yyyy"),
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
                <Button type="submit" variant="contained">
                    Submit Trade
                </Button>
            </Box>
        </Box>
    );
};

export default TradeFormExitsContainer;