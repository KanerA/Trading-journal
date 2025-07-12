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

const defaultExit = {
    price: 0,
    date: format(new Date(), "dd/MM/yyyy"),
    amount: 0,
};

const TradeFormExitsContainer = ({ control, errors }: TradeFormExitsContainerProps) => {
    const [exitsInputs, setExitsInputs] = useState<NewTradeFields["exits"]>([defaultExit]);

    const addNewExitInput = () => setExitsInputs([...exitsInputs, defaultExit]);

    return (
        <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "0.8rem" }}>
                <Typography variant="h5">
                    Add Exit Positions
                </Typography>
                <Button variant="contained" onClick={() => addNewExitInput()}>
                    + Add New Exit
                </Button>
            </Box>

            <TradeFormExits control={control} errors={errors} exits={exitsInputs} />

            <Box>
                <Button type="submit" variant="contained">
                    Submit Trade
                </Button>
            </Box>
        </Box>
    );
};

export default TradeFormExitsContainer;