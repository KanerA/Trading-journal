import { HttpMethod, useApiMutation } from "./useApi";

export const useLogin = () => {
    const { mutate } = useApiMutation("/auth/login", HttpMethod.POST, ["users"]);
    return async (data: { email: string, password: string }) => mutate(data)
}