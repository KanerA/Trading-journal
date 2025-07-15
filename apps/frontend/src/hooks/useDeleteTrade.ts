import { HttpMethod, useApiMutation } from "./useApi";

export const useDeleteTrade = () => {
    const { mutate } = useApiMutation("/trade/", HttpMethod.DELETE, ["trades"]);
    return async (tradeId: string) => mutate({ tradeId })
}