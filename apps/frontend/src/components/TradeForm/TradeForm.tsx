import { yupResolver } from "@hookform/resolvers/yup";
import { Paper } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Outcome, PositionStatus, type NewTradeFields, type Trade } from "@trading-journal/shared";
import { format } from "date-fns";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { getSchema } from "../../formValidation/yupSchema";
import { addTrade } from "../../store/reducers/tradesSlice";
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
    return totalAmountSold < entryAmount ? PositionStatus.Open : PositionStatus.Closed;
}

const defaultValuesForm: NewTradeFields = {
    ticker: "",
    entryPrice: 0,
    entryDate: format(new Date(), "dd/MM/yyyy"),
    entryAmount: 0,
    exits: [{
        price: 0,
        date: format(new Date(), "dd/MM/yyyy"),
        amount: 0,
    }],
}

const TradeForm: React.FC<AddTradeFormProps> = ({ closeModal }) => {
    const dispatch = useDispatch();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<NewTradeFields>({
        defaultValues: defaultValuesForm,
        resolver: (data, context, options) => {
            const schema = getSchema(data.entryDate);
            return yupResolver(schema)(data, context, options);
        }
    });

    const onSubmit = (data: NewTradeFields) => {
        // TODO: add id to exits
        console.log("Submitted:", data);
        const { pnl, returnPercent } = calcPnLAndPercentage(data.entryPrice, data.entryAmount, data.exits)
        const generatedData: Trade = {
            ...data,
            id: uuidv4(),
            outcome: pnl >= 0 ? Outcome.Winner : Outcome.Loser,
            pnl,
            returnPercent,
            status: calcPositionStatus(data.entryAmount, data.exits),
        }
        dispatch(addTrade(generatedData))
        closeModal();
    };

    return (
        <Paper elevation={0} sx={{ p: 3, }} square>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <TradeFormEntryContainer control={control} errors={errors} />
                    <TradeFormExitsContainer control={control} errors={errors["exits"]} />
                </form>
            </LocalizationProvider>
        </Paper>
    );
};

export default TradeForm;
