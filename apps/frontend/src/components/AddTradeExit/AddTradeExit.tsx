import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Box, Chip, Grid, IconButton } from "@mui/material";
import type { NewTradeFields, PositionExit } from '@trading-journal/shared';
import { AddTradeExitsLabels } from '@trading-journal/shared/enums';
import type { Control, FieldArrayWithId, FieldErrors } from 'react-hook-form';
import ControlledTextField from '../ControlledComponents/ControlledTextField';

interface AddTradeExitProps {
    field: FieldArrayWithId<NewTradeFields, "exits", "id">
    control: Control<NewTradeFields>
    errors: FieldErrors<NewTradeFields>["exits"]
    number: number
}

const AddTradeExit = ({ number, field, control, errors }: AddTradeExitProps) => {
    return (
        <Grid key={field.id}>
            <Box sx={{
                display: "flex", justifyContent: "space-between", alignItems: "center", padding: '1rem 2rem 1rem 2rem'
            }}>
                <Chip variant="outlined" size="small" label={`Exit #${number}`} />
                <IconButton sx={{ width: "3rem", padding: 0, borderRadius: 0 }} component="a" onClick={() => alert("HELLO " + number)}>
                    <DeleteOutlineIcon sx={{ width: "3rem", padding: 0 }} />
                </IconButton>
            </Box>
            <Box>
                {
                    (Object.keys(field) as (keyof PositionExit)[]).map((val, index: number) => {
                        if (!AddTradeExitsLabels[val]) return
                        console.log({ val, errors })
                        const isError = !!errors?.[index]?.[val];
                        const errorMessage = errors?.[index]?.[val]?.message || ""
                        return <Grid>
                            <ControlledTextField control={control} label={AddTradeExitsLabels[val]} name={`exits.${index}.${val}`} error={!!isError} errorMessage={errorMessage} />
                        </Grid>
                    })
                }
            </Box>
        </Grid>
    );
};

export default AddTradeExit;