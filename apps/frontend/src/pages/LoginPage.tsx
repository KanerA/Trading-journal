// src/pages/Login.tsx
import { FC, useState } from "react";
import AuthForm, { AuthMode } from "./AuthForm";

const Login: FC = () => {
    const [mode, setMode] = useState<AuthMode>("login");
    const onSubmitRegister = (data: { email: string; password: string; name?: string }) => {
        console.log("register data", data)
    }

    const onSubmitLogin = (data: { email: string; password: string }) => {
        console.log("loginData", data)
    }

    const toggleMode = () => {
        setMode(mode === "login" ? "register" : "login");
    };

    return <AuthForm mode={mode} toggleMode={toggleMode} onSubmit={mode === "login" ? onSubmitLogin : onSubmitRegister} />

};

export default Login;
