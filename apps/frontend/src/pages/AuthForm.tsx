import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

export type AuthMode = "login" | "register";

interface AuthFormProps {
    mode: AuthMode;
    toggleMode: () => void;
    onSubmit: (data: { email: string; password: string; name?: string }) => void;
}

const AuthForm = ({ mode, onSubmit, toggleMode }: AuthFormProps) => {

    const [form, setForm] = useState({ email: "", password: "", name: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (mode === "login") {
            onSubmit({ email: form.email, password: form.password });
        } else {
            onSubmit({ email: form.email, password: form.password, name: form.name });
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: "100%",
                maxWidth: 400,
                mx: "auto",
                p: 4,
                borderRadius: 2,
                boxShadow: 3,
                bgcolor: "background.paper",
            }}
        >
            <Typography variant="h5" sx={{ textAlign: "center", fontWeight: "bold" }}>
                {mode === "login" ? "Login" : "Register"}
            </Typography>

            {mode === "register" && (
                <TextField
                    label="Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    fullWidth
                />
            )}

            <TextField
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                fullWidth
            />

            <TextField
                label="Password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                fullWidth
            />

            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                {mode === "login" ? "Login" : "Register"}
            </Button>

            <Button onClick={() => {
                toggleMode();
                setForm({ email: "", password: "", name: "" });
            }} sx={{ textTransform: "none" }}>
                {mode === "login"
                    ? "Don't have an account? Register"
                    : "Already have an account? Login"}
            </Button>
        </Box>
    );
}

export default AuthForm;
