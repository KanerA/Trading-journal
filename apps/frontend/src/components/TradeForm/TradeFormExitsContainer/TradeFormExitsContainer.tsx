import { Box, Button, Typography } from '@mui/material';
import type { NewTradeFields } from '@trading-journal/shared';
import { type Control, type FieldErrors } from 'react-hook-form';
import TradeFormExits from '../TradeFormExits/TradeFormExits';

interface TradeFormExitsContainerProps {
    control: Control<NewTradeFields>
    errors: FieldErrors<NewTradeFields>["exits"]
    useFieldArray: any

}

const TradeFormExitsContainer = ({ control, errors }: TradeFormExitsContainerProps) => {
    return (
        <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "0.8rem" }}>
                <Typography variant="h5">
                    Add Exit Positions
                </Typography>
                <Button variant="contained" onClick={() => { }}>
                    + Add New Exit
                </Button>
            </Box>
            <TradeFormExits control={control} errors={errors} />
            <Box>
                <Button type="submit" variant="contained" color="primary">
                    Submit Trade
                </Button>
            </Box>
        </Box>
    );
};

export default TradeFormExitsContainer;