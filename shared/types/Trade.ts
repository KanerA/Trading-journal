import type { Outcome } from "./Outcome";

export type PositionExit = {
    price: number;
    amount: number;
    date: string;
}

export type Trade = {
    ticker: string;
    status: 'Closed' | 'Open';
    outcome: Outcome;
    entryPrice: number;
    entryDate: string;
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
