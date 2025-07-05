import { FormLabel, TextField } from '@mui/material';
import type { NewTradeFields } from "@trading-journal/shared";
import { Controller, type Control, type Path } from 'react-hook-form';

interface ControlledTextFieldProps {
    name: Path<NewTradeFields>,
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
            render={({ field: { onChange, ...field } }) => (
                <>
                    <FormLabel>{label}</FormLabel>
                    <TextField
                        {...field}
                        type="text"
                        fullWidth
                        error={error}
                        helperText={errorMessage}
                        onChange={(e) => {
                            onChange(name === "ticker" ? e.target.value.toUpperCase() : e.target.value);
                        }}
                    />
                </>
            )}
        />
    );
};

export default ControlledTextField;