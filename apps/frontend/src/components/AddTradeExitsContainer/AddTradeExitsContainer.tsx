import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Box, Chip, IconButton } from "@mui/material";
import type { NewTradeFields } from '@trading-journal/shared';
import type { Control, FieldArrayWithId, FieldErrors } from 'react-hook-form';
import TradeExit from '../TradeExit/TradeExit';

interface AddTradeExitProps {
    field: FieldArrayWithId<NewTradeFields, "exits", "id">
    control: Control<NewTradeFields>
    errors: FieldErrors<NewTradeFields>["exits"]
    number: number
}

const AddTradeExitsContainer = ({ control, number, field, errors }: AddTradeExitProps) => {
    return (
        <Box key={field.id}>
            <Box sx={{
                display: "flex", justifyContent: "space-between", alignItems: "center", padding: '1rem 2rem 1rem 2rem'
            }}>
                <Chip variant="outlined" size="small" label={`Exit #${number}`} />
                <IconButton sx={{ width: "3rem", padding: 0, borderRadius: 0 }} component="a" onClick={() => alert("HELLO " + number)}>
                    <DeleteOutlineIcon sx={{ width: "3rem", padding: 0 }} />
                </IconButton>
            </Box>
            <TradeExit control={control} errors={errors} field={field} />
        </Box>
    );
};

export default AddTradeExitsContainer;