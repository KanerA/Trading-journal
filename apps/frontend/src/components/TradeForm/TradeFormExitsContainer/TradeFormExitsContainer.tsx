import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Typography } from '@mui/material';
import type { NewTradeFields } from '@trading-journal/types';
import { format } from 'date-fns';
import { useState } from 'react';
import { type Control, type FieldErrors, useWatch } from 'react-hook-form';
import TradeFormExits from '../TradeFormExits/TradeFormExits';

interface TradeFormExitsContainerProps {
    control: Control<NewTradeFields>
    errors: FieldErrors<NewTradeFields>["exits"]
    initialExits?: NewTradeFields["exits"]
}

const defaultExit = {
    price: 0,
    date: format(new Date(), "dd/MM/yyyy"),
    amount: 0,
};

const TradeFormExitsContainer = ({ control, errors, initialExits }: TradeFormExitsContainerProps) => {
    const [exitsInputs, setExitsInputs] = useState<NewTradeFields["exits"]>(initialExits ?? [defaultExit]);
    const [pendingDeleteIndex, setPendingDeleteIndex] = useState<number | null>(null);
    const watchedExits = useWatch({ control, name: "exits" });

    const addNewExitInput = () => setExitsInputs([...exitsInputs, defaultExit]);

    const handleDeleteClick = (index: number) => {
        const exit = watchedExits?.[index];
        if (exit && (exit.price !== 0 || exit.amount !== 0)) {
            setPendingDeleteIndex(index);
        } else {
            setExitsInputs(exitsInputs.filter((_, i) => i !== index));
        }
    };

    const confirmDelete = () => {
        if (pendingDeleteIndex !== null) {
            setExitsInputs(exitsInputs.filter((_, i) => i !== pendingDeleteIndex));
        }
        setPendingDeleteIndex(null);
    };

    const cancelDelete = () => setPendingDeleteIndex(null);

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

            {exitsInputs.length === 0 ? (
                <Paper elevation={2} sx={{ marginTop: "0.8rem", padding: "1.5rem 2rem", color: "text.secondary" }}>
                    <Typography variant="body2">No exits added — trade will be saved as <strong>Open</strong>.</Typography>
                </Paper>
            ) : (
                <TradeFormExits control={control} errors={errors} exits={exitsInputs} onDelete={handleDeleteClick} />
            )}

            <Box>
                <Button type="submit" variant="contained">
                    Submit Trade
                </Button>
            </Box>

            <Dialog open={pendingDeleteIndex !== null} onClose={cancelDelete}>
                <DialogTitle>Delete Exit?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        This exit has data that will be lost. Are you sure?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={cancelDelete}>Cancel</Button>
                    <Button variant="contained" color="error" onClick={confirmDelete}>Delete</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default TradeFormExitsContainer;