import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import api from '../lib/api';

interface LoginData {
    email: string;
    password: string;
}

interface AuthResponse {
    user: any
}

const loginUser = async (data: LoginData): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/auth/login', data);
    return response.data;
};

export const useLogin = (options?: UseMutationOptions<AuthResponse, AxiosError, LoginData>) => {
    return useMutation({
        mutationFn: loginUser,
        ...options,
    });
};