import { Box, Divider } from "@mui/material";
import { type NewTradeFields, type PositionExit, AddTradeExitsLabels } from "@trading-journal/shared";
import type { FieldErrors } from "react-hook-form";
import ControlledDatePicker from "../../../ControlledComponents/ControlledDatePicker";
import ControlledTextField from "../../../ControlledComponents/ControlledTextField";

interface TradeExitProps {
    exit?: PositionExit, // Keep for editing existing exits
    errors: FieldErrors<NewTradeFields>["exits"],
    control: any,
    exitItemIndex: number
}

const TradeFormExit = ({ errors, control, exitItemIndex }: TradeExitProps) => {
    return (
        <>
            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", padding: '0 2rem 1rem 2rem' }} >
                {
                    (Object.keys(AddTradeExitsLabels) as (keyof PositionExit)[]).map((val) => {
                        if (!AddTradeExitsLabels[val]) return
                        const isError = !!errors?.[exitItemIndex]?.[val];
                        const errorMessage = errors?.[exitItemIndex]?.[val]?.message || "";
                        if (val === "date") {
                            return <ControlledDatePicker key={val} control={control} label={AddTradeExitsLabels[val]} name={`exits.${exitItemIndex}.${val}`} error={isError} errorMessage={errorMessage} />
                        }
                        return <ControlledTextField key={val} control={control} label={AddTradeExitsLabels[val]} name={`exits.${exitItemIndex}.${val}`} error={isError} errorMessage={errorMessage} />

                    })
                }
            </Box>
            <Divider sx={{ my: 2 }} />
        </>
    );
};

export default TradeFormExit;