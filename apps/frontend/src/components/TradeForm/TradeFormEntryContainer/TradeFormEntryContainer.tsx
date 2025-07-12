import { Box, DialogTitle, Grid } from "@mui/material";
import { type NewTradeFields, AddTradeEntryLabels } from "@trading-journal/shared";
import { type Control, type FieldErrors } from "react-hook-form";
import ControlledDatePicker from "../../ControlledComponents/ControlledDatePicker";
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
                            return <Grid size={{ xs: 12, sm: 6 }} key={val}>
                                <ControlledDatePicker control={control} name={val} label={AddTradeEntryLabels[val]} error={!!errors[val]}
                                    errorMessage={errors[val]?.message || ""} />

                            </Grid>
                        }
                        return <Grid size={{ xs: 12, sm: 6 }} key={val}>
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