import type { NewTradeFields } from "../types";

export const NewTradeFieldLabels: Record<keyof NewTradeFields, string> = {
    entryAmount: "Entry Amount",
    entryDate: "Entry Date",
    entryPrice: "Entry Price",
    ticker: "Stock Symbol",
    exits: "Exits"
}