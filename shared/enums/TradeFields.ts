import type { NewTradeFields, PositionExit } from "../types";

export const AddTradeEntryLabels: Record<keyof Omit<NewTradeFields, "exits" | "id">, string> = {
    ticker: "Stock Symbol",
    sharesBought: "Shares Bought",
    entryPrice: "Price",
    entryDate: "Entry Date",
}

export const AddTradeExitsLabels: Record<keyof Omit<PositionExit, "id">, string> = {
    amount: "Shares Sold",
    price: "Price",
    date: "Exit Date",
}
