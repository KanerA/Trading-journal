import { HttpMethod, useApiMutation } from "./useApi";

export const useLogin = () => {
    const { mutate } = useApiMutation("/auth/login", HttpMethod.POST, ["users"]);
    return async (username: string, password: string) => mutate({ username, password })
}