import type { Outcome } from "./Outcome";

export type PositionExit = {
    price: number;
    amount: number;
    date: Date;
}

export type PositionStatus = "Open" | "Closed";

export type Trade = {
    ticker: string;
    status: PositionStatus;
    outcome: Outcome;
    entryPrice: number;
    entryDate: Date;
    entryAmount: number;
    exits: PositionExit[];
    pnl: number;
    returnPercent: number;
};

export interface NewTradeFields {
    ticker: string,
    entryPrice: number,
    entryDate: Date,
    entryAmount: number,
    exits: PositionExit[]
}
