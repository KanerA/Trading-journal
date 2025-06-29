import type { Outcome } from "./Outcome";

export type Trade = {
    ticker: string;
    status: 'Closed' | 'Open';
    outcome: Outcome;
    entryPrice: number;
    entryDate: string;
    amount: number;
    exits: {
        price: number;
        amount: number;
        date: string;
    }[];
    pnl: number;
    returnPercent: number;
};
