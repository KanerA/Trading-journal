import { HttpMethod, useApiMutation } from "./useApi";

export const useLogin = () => {
    const { data, mutate } = useApiMutation("/auth/login", HttpMethod.POST, ["users"]);
    return async (user: { email: string, password: string }) => {
        await mutate(user);
        return data
    }
}