import { Box, Button, Typography } from '@mui/material';
import type { NewTradeFields } from '@trading-journal/shared';
import { format } from 'date-fns';
import { useFieldArray, type Control, type FieldErrors } from 'react-hook-form';
import TradeFormExits from '../TradeFormExits/TradeFormExits';

interface TradeFormExitsContainerProps {
    control: Control<NewTradeFields>
    errors: FieldErrors<NewTradeFields>["exits"]
    exits: any[]
}

const TradeFormExitsContainer = ({ control, errors }: TradeFormExitsContainerProps) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: "exits"
    });

    console.log({ fields })

    const addNewExitInput = () => {
        append({
            price: 0,
            amount: 0,
            date: format(new Date().toDateString(), "dd/MM/yyy")
        })
    };

    const onClickDeleteExit = (index: number) => {
        if (fields.length === 1) {
            // TODO: Find better way
            alert("Can't delete when only one exit.")
            return
        }
        remove(index)
    }

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

            <TradeFormExits control={control} errors={errors} exits={fields} onClickDeleteExit={onClickDeleteExit} />

            <Box>
                <Button type="submit" variant="contained">
                    Submit Trade
                </Button>
            </Box>
        </Box>
    );
};

export default TradeFormExitsContainer;