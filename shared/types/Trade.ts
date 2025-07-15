
export type PositionExit = {
    price: number;
    amount: number;
    date: string;
}

export enum PositionStatus {
    Open = "Open",
    Closed = "Closed"
}

export enum Outcome {
    Winner = "winner",
    Loser = "loser"
}

export type Trade = {
    id: string;
    ticker: string;
    status: PositionStatus;
    outcome: Outcome;
    entryPrice: number;
    entryDate: string;
    sharesBought: number;
    exits: PositionExit[];
    pnl: number;
    returnPercent: number;
};

export interface NewTradeFields {
    ticker: string,
    entryPrice: number,
    entryDate: string,
    sharesBought: number,
    exits: PositionExit[]
}
