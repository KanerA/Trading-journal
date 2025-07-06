import { Box, Divider } from "@mui/material";
import type { NewTradeFields, PositionExit } from "@trading-journal/shared";
import { AddTradeExitsLabels } from "@trading-journal/shared/enums";
import type { FieldArrayWithId } from "react-hook-form";
import ControlledTextField from "../../../ControlledComponents/ControlledTextField";

interface TradeExitProps {
    field: FieldArrayWithId<NewTradeFields, "exits", "id">,
    errors: any,
    control: any
}

const TradeFormExit = ({ field, errors, control }: TradeExitProps) => {
    return (
        <>
            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", padding: '0 2rem 1rem 2rem' }} >
                {
                    (Object.keys(field) as (keyof PositionExit)[]).map((val, index: number) => {
                        if (!AddTradeExitsLabels[val]) return
                        const isError = !!errors?.[index]?.[val];
                        const errorMessage = errors?.[index]?.[val]?.message || ""
                        return <Box key={val}>
                            <ControlledTextField control={control} label={AddTradeExitsLabels[val]} name={`exits.${index}.${val}`} error={!!isError} errorMessage={errorMessage} />
                        </Box>
                    })
                }
            </Box>
            <Divider sx={{ my: 2 }} />
        </>
    );
};

export default TradeFormExit;