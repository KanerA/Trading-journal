import { FormLabel, TextField } from '@mui/material';
import type { NewTradeFields } from "@trading-journal/shared";
import { Controller, type Control } from 'react-hook-form';

interface ControlledTextFieldProps {
    name: keyof NewTradeFields,
    label: string,
    control: Control<NewTradeFields>,
    error: boolean,
    errorMessage: string
}

const ControlledTextField = ({ name, label, control, error, errorMessage }: ControlledTextFieldProps) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={{ required: `${name} is required.`, min: 1 }}
            render={({ field }) => (
                <>
                    <FormLabel>{label}</FormLabel>
                    <TextField
                        {...field}
                        type="text"
                        fullWidth
                        error={error}
                        helperText={errorMessage}
                    />
                </>
            )}
        />
    );
};

export default ControlledTextField;