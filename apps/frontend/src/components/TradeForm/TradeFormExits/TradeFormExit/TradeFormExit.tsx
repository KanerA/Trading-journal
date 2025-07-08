import { Box, Divider } from "@mui/material";
import type { NewTradeFields, PositionExit } from "@trading-journal/shared";
import { AddTradeExitsLabels } from "@trading-journal/shared/enums";
import type { FieldErrors } from "react-hook-form";
import ControlledDatePicker from "../../../ControlledComponents/ControlledDatePicker";
import ControlledTextField from "../../../ControlledComponents/ControlledTextField";

interface TradeExitProps {
    exit: PositionExit,
    errors: FieldErrors<NewTradeFields>["exits"],
    control: any,
    exitItemIndex: number
}

const TradeFormExit = ({ exit, errors, control, exitItemIndex }: TradeExitProps) => {
    return (
        <>
            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", padding: '0 2rem 1rem 2rem' }} >
                {
                    (Object.keys(exit) as (keyof PositionExit)[]).map((val) => {
                        if (!AddTradeExitsLabels[val]) return
                        const isError = !!errors?.[exitItemIndex]?.[val];
                        const errorMessage = errors?.[exitItemIndex]?.[val]?.message || "";
                        if (val === "date") {
                            return <ControlledDatePicker key={val} control={control} label={AddTradeExitsLabels[val]} name={`exits.${exitItemIndex}.${val}`} error={!!isError} errorMessage={errorMessage} />

                        }
                        return <Box key={val}>
                            <ControlledTextField control={control} label={AddTradeExitsLabels[val]} name={`exits.${exitItemIndex}.${val}`} error={!!isError} errorMessage={errorMessage} value={exit[val]} />
                        </Box>
                    })
                }
            </Box>
            <Divider sx={{ my: 2 }} />
        </>
    );
};

export default TradeFormExit;