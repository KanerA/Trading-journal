import { yupResolver } from "@hookform/resolvers/yup";
import { Paper } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Outcome, PositionStatus, type NewTradeFields, type Trade } from "@trading-journal/shared";
import { format } from "date-fns";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { getSchema } from "../../formValidation/yupSchema";
import { useSaveTrade } from "../../hooks/useSaveTrade";
import { getEditTradeId } from "../../store/selectors/modalSelectors";
import { getTradeById } from "../../store/selectors/tradeSelector";
import TradeFormEntryContainer from "./TradeFormEntryContainer/TradeFormEntryContainer";
import TradeFormExitsContainer from "./TradeFormExitsContainer/TradeFormExitsContainer";

interface AddTradeFormProps {
    onCloseModal: () => void
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

const getFormValues = (trade: Trade | null) => ({
    ticker: trade?.ticker ?? "",
    entryPrice: trade?.entryPrice ?? 0,
    entryDate: trade?.entryDate ?? format(new Date(), "dd/MM/yyyy"),
    sharesBought: trade?.sharesBought ?? 0,
    exits: trade?.exits ?? [{
        price: 0,
        date: format(new Date(), "dd/MM/yyyy"),
        amount: 0,
    }],
})

const TradeForm: React.FC<AddTradeFormProps> = ({ onCloseModal }) => {
    const saveTrade = useSaveTrade();

    const editTradeId = useSelector(getEditTradeId)
    const tradeToEdit = useSelector(getTradeById(editTradeId));

    const formValues = getFormValues(tradeToEdit)

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<NewTradeFields>({
        defaultValues: formValues,
        resolver: (data, context, options) => {
            const schema = getSchema(data.entryDate);
            return yupResolver(schema)(data, context, options);
        }
    });

    const onSubmit = async (data: NewTradeFields) => {
        console.log("Submitted:", data);
        const { pnl, returnPercent } = calcPnLAndPercentage(data.entryPrice, data.sharesBought, data.exits)
        const generatedData: Trade = {
            ...data,
            id: tradeToEdit?.id || uuidv4(),
            outcome: pnl >= 0 ? Outcome.Winner : Outcome.Loser,
            pnl,
            returnPercent,
            status: calcPositionStatus(data.sharesBought, data.exits),
        }
        await saveTrade(generatedData);
        onCloseModal();
    };

    return (
        <Paper elevation={0} sx={{ p: 3, }} square>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <TradeFormEntryContainer control={control} errors={errors} />
                    <TradeFormExitsContainer control={control} errors={errors["exits"]} exits={formValues.exits} />
                </form>
            </LocalizationProvider>
        </Paper>
    );
};

export default TradeForm;
