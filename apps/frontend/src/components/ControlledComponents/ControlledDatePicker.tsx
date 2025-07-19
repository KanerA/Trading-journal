import { Box, FormLabel } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import type { NewTradeFields } from '@trading-journal/shared';
import { format } from 'date-fns';
import { Controller, type Control, type Path } from 'react-hook-form';

interface ControlledDatePickerProps {
    name: Path<NewTradeFields>
    control: Control<NewTradeFields>
    label: string
    error: boolean,
    errorMessage: string
}

const ControlledDatePicker = ({ name, control, label, error, errorMessage }: ControlledDatePickerProps) => {
    return (
        <Box>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <>
                        <FormLabel sx={{ fontWeight: "bold", color: "black" }}>{label}</FormLabel>
                        <DatePicker
                            defaultValue={new Date()}
                            disableFuture={true}
                            onChange={(val) => {
                                // TODO: fix date handling throughout the app
                                if (!val) return field.onChange(val)
                                field.onChange(format(val.toDateString(), "dd/MM/yyy"))
                            }}
                            format="dd/MM/yyyy"
                            slotProps={{
                                textField: {
                                    fullWidth: true,
                                    error: error,
                                    helperText: errorMessage,
                                },
                            }}
                        />
                    </>
                )}
            />
        </Box>
    );
};

export default ControlledDatePicker;