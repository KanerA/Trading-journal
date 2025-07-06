import { Box, DialogTitle, FormLabel, Grid } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import type { NewTradeFields } from "@trading-journal/shared";
import { AddTradeEntryLabels } from "@trading-journal/shared/enums";
import { Controller, type Control, type FieldErrors } from "react-hook-form";
import ControlledTextField from "../../ControlledComponents/ControlledTextField";

interface TradeFormEntryDataProps {
    control: Control<NewTradeFields>
    errors: FieldErrors<NewTradeFields>
}

const TradeFormEntryContainer = ({ control, errors }: TradeFormEntryDataProps) => {
    return (
        <Box>
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
        </Box>
    );
};

export default TradeFormEntryContainer;