import type { NewTradeFields, PositionExit } from "../types";

export const AddTradeEntryLabels: Record<keyof Omit<NewTradeFields, "exits">, string> = {
    entryAmount: "Entry Amount",
    entryDate: "Entry Date",
    entryPrice: "Entry Price",
    ticker: "Stock Symbol",
}

export const AddTradeExitsLabels: Record<keyof PositionExit, string> = {
    amount: "Amount",
    date: "Exit Date",
    price: "Price"
}
