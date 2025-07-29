export enum StatsLabels {
    TotalPnL = "Total P&L",
    WinRate = "Win Rate",
    WinningTrades = "WinningTrades",
    LosingTrades = "Losing Trades"
}

export const statCardsValues: Record<StatsLabels, any> = {
    [StatsLabels.TotalPnL]: "",
    [StatsLabels.LosingTrades]: "",
    [StatsLabels.WinRate]: "",
    [StatsLabels.WinningTrades]: "",
}