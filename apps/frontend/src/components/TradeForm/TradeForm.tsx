import { yupResolver } from "@hookform/resolvers/yup";
import { Paper } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import type { NewTradeFields, PositionStatus, Trade } from "@trading-journal/shared";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { yupSchema } from "../../formValidation/yupSchema";
import TradeFormEntryContainer from "./TradeFormEntryContainer/TradeFormEntryContainer";
import TradeFormExitsContainer from "./TradeFormExitsContainer/TradeFormExitsContainer";

interface AddTradeFormProps {
    closeModal: () => void
}

const calcPnLAndPercentage = (entryPrice: number, entryAmount: number, exits: Trade["exits"]): { pnl: number, returnPercent: number } => {
    const totalBought = entryPrice * entryAmount;
    const totalSold = exits.reduce((acc, curr) => {
        acc += curr.amount * curr.price;
        return acc
    }, 0);

    return { pnl: (totalSold - totalBought), returnPercent: ((totalSold - totalBought) / totalBought) * 100 };
}

const calcPositionStatus = (entryAmount: number, exits: Trade["exits"]): PositionStatus => {
    const totalAmountSold = exits.reduce((acc, curr) => {
        acc += curr.amount;
        return acc;
    }, 0);
    return totalAmountSold < entryAmount ? "Open" : "Closed";
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
                date: new Date(),
                amount: 0,
            },
            ],
        },
        resolver: yupResolver(yupSchema)
    });

    const onSubmit = (data: NewTradeFields) => {
        console.log("Submitted:", data);
        const { pnl, returnPercent } = calcPnLAndPercentage(data.entryPrice, data.entryAmount, data.exits)
        const generatedData: Trade = {
            ...data,
            outcome: pnl >= 0 ? "winner" : "loser",
            pnl,
            returnPercent,
            status: calcPositionStatus(data.entryAmount, data.exits),

        }

        console.log({ generatedData })
        setTimeout(closeModal, 500);
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
