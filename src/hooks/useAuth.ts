import { useSnackbar } from "notistack";
import { loginApi, LoginInput, AuthResponse } from "../pages/login/api/auth";
import { registerApi, RegisterInput } from "../pages/register/api/register";

export function useAuth() {
    const { enqueueSnackbar } = useSnackbar();

    async function register(registerInput: RegisterInput & { passwordRepeat: string }): Promise<AuthResponse | void> {
        const { fullname, email, password, passwordRepeat } = registerInput;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            enqueueSnackbar("Неверный формат почты", { variant: "error", className: "!rounded-xl !backdrop-blur-sm !bg-black/20 !text-red-500 !border !border-red-500/20" });
            return;
        }
        if (!password || password.length < 6) {
            enqueueSnackbar("Пароль должен быть не менее 6 символов", { variant: "error", className: "!rounded-xl !backdrop-blur-sm !bg-black/20 !text-red-500 !border !border-red-500/20" });
            return;
        }
        if (password !== passwordRepeat) {
            enqueueSnackbar("Пароли не совпадают", { variant: "error", className: "!rounded-xl !backdrop-blur-sm !bg-black/20 !text-red-500 !border !border-red-500/20" });
            return;
        }
        try {
            const result = await registerApi({ fullname, email, password });
            localStorage.setItem("token", result.token);
            document.location.href = "/chat";
            return
        } catch (error: any) {
            enqueueSnackbar(error.message, { variant: "error", className: "!rounded-xl !backdrop-blur-sm !bg-black/20 !text-red-500 !border !border-red-500/20" });
        }
    }

    async function login(loginInput: LoginInput): Promise<AuthResponse | void> {
        const { email, password } = loginInput;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            enqueueSnackbar("Неверный формат почты", { variant: "error", className: "!rounded-xl !backdrop-blur-sm !bg-black/20 !text-red-500 !border !border-red-500/20" });
            return;
        }
        if (!password) {
            enqueueSnackbar("Введите пароль", { variant: "error", className: "!rounded-xl !backdrop-blur-sm !bg-black/20 !text-red-500 !border !border-red-500/20" });
            return;
        }
        try {
            const result = await loginApi({ email, password });
            localStorage.setItem("token", result.token);
            document.location.href = "/chat";
            return;
        } catch (error: any) {
            enqueueSnackbar(error.message, { variant: "error", className: "!rounded-xl !backdrop-blur-sm !bg-black/20 !text-red-500 !border !border-red-500/20" });
        }
    }

    return { register, login };
}
