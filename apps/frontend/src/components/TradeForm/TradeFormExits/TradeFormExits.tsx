import { Box, Paper } from "@mui/material";
import type { NewTradeFields } from '@trading-journal/shared';
import { useFieldArray, type Control, type FieldErrors } from 'react-hook-form';
import TradeFormExitHeader from "../TradeFormExitHeader/TradeFormExitHeader";
import TradeFormExit from './TradeFormExit/TradeFormExit';

interface AddTradeExitProps {
    control: Control<NewTradeFields>
    errors: FieldErrors<NewTradeFields>["exits"]
}

const TradeFormExits = ({ control, errors }: AddTradeExitProps) => {
    const { fields } = useFieldArray({ control, name: "exits" });
    return (
        <Paper elevation={2} sx={{ marginTop: "0.8rem" }}>
            {fields.map((field, index) => (
                <Box key={field.id}>
                    <TradeFormExitHeader number={index + 1} />
                    <TradeFormExit control={control} errors={errors} field={field} exitItemIndex={index} />
                </Box>
            )
            )}

        </Paper>
    );
};

export default TradeFormExits;