import { Paper } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import type { NewTradeFields, Trade } from "@trading-journal/shared";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import TradeFormEntryContainer from "./TradeFormEntryContainer/TradeFormEntryContainer";
import TradeFormExitsContainer from "./TradeFormExitsContainer/TradeFormExitsContainer";

interface AddTradeFormProps {
    closeModal: () => void
}

const TradeForm: React.FC<AddTradeFormProps> = ({ closeModal }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
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

    const onSubmit = (data: NewTradeFields) => {
        console.log("Submitted:", data);
    };

    return (
        <Paper elevation={0} sx={{ p: 3, }} square>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <TradeFormEntryContainer control={control} errors={errors} />
                    <TradeFormExitsContainer control={control} errors={errors["exits"]} useFieldArray={useFieldArray} />
                </form>
            </LocalizationProvider>
        </Paper>
    );
};

export default TradeForm;
