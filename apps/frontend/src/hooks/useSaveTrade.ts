import type { Trade } from "@trading-journal/shared";
import { HttpMethod, useApiMutation } from "./useApi";

export const useSaveTrade = (): (trade: Trade) => void => {
    const { mutate } = useApiMutation("/trade", HttpMethod.POST, ["trades"]);
    return async (trade: Trade) => mutate(trade)

}