import { HttpMethod, useApiMutation } from "./useApi";

export const useSignup = ({ onSuccess, onError }: { onSuccess: any, onError: any }) => {
    const { mutate } = useApiMutation("/auth/signup", HttpMethod.POST, ["users"]);
    return async (data: { email: string; password: string; name?: string }) => mutate(data, { onSuccess, onError })
}