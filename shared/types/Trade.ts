export type Trade = {
    ticker: string;
    status: 'Closed' | 'Open';
    outcome: 'winner' | 'loser';
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
