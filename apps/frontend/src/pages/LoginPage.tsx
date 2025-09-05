// src/pages/Login.tsx
import { FC, useState } from "react";
import { useNavigate } from "react-router";
import { useLogin } from "../hooks/useLogin";
import { useSignup } from "../hooks/useSignup";
import AuthForm, { AuthMode } from "./AuthForm";

const Login: FC = () => {
    const [mode, setMode] = useState<AuthMode>("login");
    const navigate = useNavigate()

    const loginOnSuccess = (data: any) => {
        console.log(data);
        navigate("/");
    }

    const { mutate: mutateLogin, isPending } = useLogin({ onSuccess: loginOnSuccess });
    const signupMutation = useSignup();

    const onSubmitRegister = async (data: { email: string; password: string; name?: string }) => {
        if (!data.name) return;
        try {

            console.log("register data", data)
            await signupMutation(data);
            // navigate("/");
        } catch (error) {
            console.log(error)
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
