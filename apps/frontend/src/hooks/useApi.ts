import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../lib/api";

export enum HttpMethod {
    GET = "get",
    POST = "post",
    PUT = "put",
    DELETE = "delete",
}

export const useApiQuery = (
    keys: string[],
    url: string,
    enabled = true
) => {
    return useQuery<any>({
        queryKey: keys,
        queryFn: async () => {
            const { data } = await api.get(url);
            return data;
        },
        enabled,
    });
}

export const useApiMutation = (
    url: string,
    method: HttpMethod = HttpMethod.POST,
    invalidateKey?: string[]
) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (variables: any) => {
            const { data } = await api.request({
                url,
                method,
                data: variables,
            });
            return data;
        },
        onSuccess: () => {
            if (invalidateKey) {
                queryClient.invalidateQueries({
                    queryKey: Array.isArray(invalidateKey)
                        ? invalidateKey
                        : [invalidateKey],
                });
            }
        },
    });
}
