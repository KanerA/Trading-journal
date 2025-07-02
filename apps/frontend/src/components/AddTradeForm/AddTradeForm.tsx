import {
    Button,
    DialogTitle,
    Grid,
    Paper,
    Typography
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { type NewTradeFields } from "@trading-journal/shared";
import { NewTradeFieldLabels } from "@trading-journal/shared/enums";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import ControlledTextField from "../ControlledComponents/ControlledTextField";

interface AddTradeFormProps {
}

const AddTradeForm: React.FC<AddTradeFormProps> = ({ }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        watch,
        getValues
    } = useForm<NewTradeFields>({
        defaultValues: {
            ticker: "",
            entryPrice: 0,
            entryDate: new Date(),
            entryAmount: 0,
            exits: [{
                price: 0,
                date: new Date().toString(),
                amount: 0,
            }],
        },
    });

    const onSubmit = (data: NewTradeFields) => {
        console.log("Submitted:", data);
    };

    useEffect(() => {
        console.log(getValues())
    }, [watch("entryAmount")])

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Paper elevation={3}>
                <form onSubmit={handleSubmit(onSubmit)} className="form">
                    <DialogTitle>
                        New Trade Entry
                    </DialogTitle>

                    <Grid container spacing={2}>
                        {
                            (Object.keys(NewTradeFieldLabels) as (keyof NewTradeFields)[]).map((val) => {
                                if (val === "entryDate") {
                                    return <Controller
                                        name="entryDate"
                                        control={control}
                                        rules={{ required: "Entry date is required" }}
                                        render={({ field, fieldState }) => (
                                            <DatePicker
                                                label="Entry Date"
                                                value={field.value}
                                                defaultValue={new Date()}
                                                disableFuture={true}
                                                onChange={(date) => field.onChange(date)}
                                                format="dd/MM/yyyy"
                                                slotProps={{
                                                    textField: {
                                                        error: !!fieldState.error,
                                                        helperText: fieldState.error?.message,
                                                    },
                                                }}
                                            />
                                        )}
                                    />
                                }
                                return <Grid size={{ xs: 12, sm: 6 }}>
                                    <ControlledTextField control={control} name={val} error={!!errors[val]}
                                        errorMessage={errors[val]?.message || ""} />
                                </Grid>
                            })
                        }

                        {/* <Grid size={{ xs: 12, sm: 6 }}>
                            <Controller
                                name="entryPrice"
                                control={control}
                                rules={{ required: "Entry price is required", min: 0.01 }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Entry Price"
                                        type="number"
                                        fullWidth
                                        error={!!errors.entryPrice}
                                        helperText={errors.entryPrice?.message}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Controller
                                name="entryAmount"
                                control={control}
                                rules={{ required: "Entry amount is required", min: 0.01 }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Entry Amount"
                                        type="number"
                                        fullWidth
                                        error={!!errors.entryPrice}
                                        helperText={errors.entryPrice?.message}
                                    />
                                )}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Controller
                                name="entryDate"
                                control={control}
                                rules={{ required: "Entry date is required" }}
                                render={({ field, fieldState }) => (
                                    <DatePicker
                                        label="Entry Date"
                                        value={field.value}
                                        onChange={(newDate) => field.onChange(newDate)}
                                        slotProps={{
                                            textField: {
                                                fullWidth: true,
                                                error: !!fieldState.error,
                                                helperText: fieldState.error?.message,
                                            },
                                        }}
                                    />
                                )}
                            />
                        </Grid> */}
                    </Grid>

                    <Typography variant="h5" className="form-title">
                        Add Exit Positions
                    </Typography>

                    {/* <Grid size={{ xs: 12, sm: 6 }}>
                            <ControlledTextField
                                name=""
                                control={control}
                                error={!!errors.entryAmount}
                                errorMessage={errors.entryAmount?.message || ""} />
                        </Grid>

                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Controller
                                name="exits.price"
                                control={control}
                                rules={{ required: "Exit price is required", min: 0.01 }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Exit Price"
                                        type="number"
                                        fullWidth
                                        error={!!errors.exits?.price}
                                        helperText={errors.exits?.price?.message}
                                    />
                                )}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Controller
                                name="entryDate"
                                control={control}
                                rules={{ required: "Entry date is required" }}
                                render={({ field, fieldState }) => (
                                    <DatePicker
                                        label="Entry Date"
                                        value={field.value}
                                        onChange={(newDate) => field.onChange(newDate)}
                                        slotProps={{
                                            textField: {
                                                fullWidth: true,
                                                error: !!fieldState.error,
                                                helperText: fieldState.error?.message,
                                            },
                                        }}
                                    />
                                )}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Controller
                                name="exits.amount"
                                control={control}
                                rules={{ required: "Exit amount is required", min: 1 }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Exit Amount"
                                        type="number"
                                        fullWidth
                                        error={!!errors.exits?.amount}
                                        helperText={errors.exits?.amount?.message}
                                    />
                                )}
                            />
                        </Grid> */}

                    <div className="form-actions">
                        <Button type="submit" variant="contained" color="primary">
                            Submit Trade
                        </Button>
                    </div>
                </form>
            </Paper>
        </LocalizationProvider>
    );
};

export default AddTradeForm;
