import type { NewTradeFields, PositionExit } from "../types";

export const AddTradeEntryLabels: Record<keyof Omit<NewTradeFields, "exits">, string> = {
    ticker: "Stock Symbol",
    sharesBought: "Shares Bought",
    entryPrice: "Price",
    entryDate: "Entry Date",
}

export const AddTradeExitsLabels: Record<keyof PositionExit, string> = {
    amount: "Shares Sold",
    price: "Price",
    date: "Exit Date",
}
