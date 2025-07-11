import type { NewTradeFields, PositionExit } from "../types";

export const AddTradeEntryLabels: Record<keyof Omit<NewTradeFields, "exits">, string> = {
    ticker: "Stock Symbol",
    entryPrice: "Entry Price",
    entryAmount: "Entry Amount",
    entryDate: "Entry Date",
}

export const AddTradeExitsLabels: Record<keyof PositionExit, string> = {
    price: "Price",
    amount: "Amount",
    date: "Exit Date",
}
