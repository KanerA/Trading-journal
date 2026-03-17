// src/pages/Login.tsx
import { FC, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../authentication/useAuth";
import { useLogin } from "../hooks/useLogin";
import { useSignup } from "../hooks/useSignup";
import api from "../lib/api";
import AuthForm, { AuthMode } from "./AuthForm";

const Login: FC = () => {
    const [mode, setMode] = useState<AuthMode>("login");
    const navigate = useNavigate()
    const { setUser } = useAuth()

    const loginOnSuccess = (data: any) => {
        setUser(data);
        navigate("/");
    }

    const signupOnSuccess = async () => {
        const { data } = await api.get('/auth/me');
        setUser(data);
        navigate("/");
    }

    const signupOnError = (_data: any) => {
    }

    const { mutate: mutateLogin, isPending } = useLogin({ onSuccess: loginOnSuccess });
    const signupMutation = useSignup({ onSuccess: signupOnSuccess, onError: signupOnError });

    const onSubmitRegister = async (data: { email: string; password: string; name?: string }) => {
        if (!data.name) return;
        try {
            await signupMutation(data);
        } catch {
            // handled by onError callback
        }
    }

    const onSubmitLogin = async (data: { email: string; password: string }) => {
        // TODO: validate user inputs
        mutateLogin(data);
    }

    const toggleMode = () => {
        setMode(mode === "login" ? "register" : "login");
    };

    return <AuthForm mode={mode} toggleMode={toggleMode} onSubmit={mode === "login" ? onSubmitLogin : onSubmitRegister} isLoading={isPending} />

};

export default Login;
