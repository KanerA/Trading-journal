import { Box, Paper } from "@mui/material";
import type { NewTradeFields } from '@trading-journal/shared';
import { type Control, type FieldErrors } from 'react-hook-form';
import TradeFormExitHeader from "../TradeFormExitHeader/TradeFormExitHeader";
import TradeFormExit from './TradeFormExit/TradeFormExit';

interface AddTradeExitProps {
    control: Control<NewTradeFields>
    errors: FieldErrors<NewTradeFields>["exits"],
    exits: NewTradeFields["exits"]
    onClickDeleteExit: (index: number) => void
}

const TradeFormExits = ({ control, errors, exits, onClickDeleteExit }: AddTradeExitProps) => {
    return (
        <Paper elevation={2} sx={{ marginTop: "0.8rem" }}>
            {exits.map((exit, index) => (
                <Box key={exit.id}>
                    <TradeFormExitHeader exitNumber={index + 1} onClickDeleteExit={onClickDeleteExit} />
                    <TradeFormExit control={control} errors={errors} exit={exit} exitItemIndex={index} />
                </Box>
            )
            )}

        </Paper>
    );
};

export default TradeFormExits;