import { useApiQuery } from "./useApi"

export const useGetAllTrades = () => {
    return useApiQuery(["trades"], '/trade', true)
}