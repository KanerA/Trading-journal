import {
    Box,
    Button,
    DialogTitle,
    FormLabel,
    Grid,
    Paper,
    Typography
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { type NewTradeFields } from "@trading-journal/shared";
import { AddTradeEntryLabels } from "@trading-journal/shared/enums";
import React, { useEffect } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import AddTradeExitsContainer from "../AddTradeExitsContainer/AddTradeExitsContainer";
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
                date: "",
                amount: 0,
            },
            {
                price: 0,
                date: "",
                amount: 0,
            }
            ],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "exits",
    });

    console.log({ fields })
    const onSubmit = (data: NewTradeFields) => {
        console.log("Submitted:", data);
    };

    useEffect(() => {
        console.log(getValues())
    }, [watch("entryAmount")])

    return (
        <Paper elevation={0} sx={{ p: 3, }} square>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <Box height={"fit-content"}>
                        <DialogTitle sx={{ m: 0, paddingTop: 0, paddingLeft: 0, fontSize: "1.5rem" }}>
                            Add New Trade
                        </DialogTitle>
                        <Grid container spacing={2}>
                            {
                                (Object.keys(AddTradeEntryLabels) as (keyof NewTradeFields)[]).map((val) => {
                                    if (val === "entryDate") {
                                        return <Grid size={{ xs: 12, sm: 6 }}>
                                            <Controller
                                                name={val}
                                                control={control}
                                                rules={{ required: "Entry date is required" }}
                                                render={({ field, fieldState }) => (
                                                    <>
                                                        <FormLabel sx={{ fontWeight: "bold", color: "black" }}>{AddTradeEntryLabels.entryDate}</FormLabel>
                                                        <DatePicker
                                                            value={field.value}
                                                            defaultValue={new Date()}
                                                            disableFuture={true}
                                                            onChange={(date) => field.onChange(date)}
                                                            format="dd/MM/yyyy"
                                                            slotProps={{
                                                                textField: {
                                                                    fullWidth: true,
                                                                    error: !!fieldState.error,
                                                                    helperText: fieldState.error?.message,
                                                                },
                                                            }}
                                                        />
                                                    </>
                                                )}
                                            />
                                        </Grid>
                                    }
                                    return <Grid size={{ xs: 12, sm: 6 }}>
                                        <ControlledTextField control={control} name={val} label={val !== "exits" ? AddTradeEntryLabels[val] : ""} error={!!errors[val]}
                                            errorMessage={errors[val]?.message || ""} />
                                    </Grid>
                                })
                            }
                        </Grid>
                        <Typography variant="h5">
                            Add Exit Positions
                        </Typography>
                        <Paper elevation={2}>
                            {fields.map((field, index) => {
                                console.log({ field })
                                // errors["exits"]?.[index]
                                return <AddTradeExitsContainer control={control} errors={errors["exits"]?.[index]} number={index + 1} field={field} />
                            })}
                        </Paper>

                        <Box>
                            <Button type="submit" variant="contained" color="primary">
                                Submit Trade
                            </Button>
                        </Box>
                    </Box>
                </form>
            </LocalizationProvider>
        </Paper>
    );
};

export default AddTradeForm;
