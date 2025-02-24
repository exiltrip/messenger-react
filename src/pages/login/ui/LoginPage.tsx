import Input from "../../../shared/ui/input/Input.tsx";
import {Link} from "react-router";
import {useSnackbar} from "notistack";
import AuthContainer from "../../../shared/ui/AuthContainer/AuthContainer.tsx";

export default function LoginPage() {

    const {enqueueSnackbar} = useSnackbar();

    const handleLogin = () => {
        enqueueSnackbar(`Ошибка! Повторите позже.`, {
            'variant': 'error',
            'className': "!rounded-xl !backdrop-blur-sm !bg-black/20 !text-red-500 !border !border-red-500/20"
        });
    }

    return (
        <AuthContainer>
            <h1 className="text-4xl font-extrabold text-center mb-6">MSG!</h1>
            <h1 className="text-2xl font-semibold text-center">Sign in</h1>
            <p className="text-center">Welcome back! Please enter your details.</p>
            <div className="mt-6 flex flex-col gap-4">
                <Input placeholder="Your e-mail address" label="Email address" type="email"/>
                <Input placeholder="Your password" label="Password" type="password"/>
                <button onClick={handleLogin} className="w-full p-3 bg-slate-900 font-bold rounded-3xl text-gray-50 mt-2">Sign
                    in
                </button>
                <p className="text-center">Don’t have an account?
                    <Link className="text-cyan-900 font-semibold" to="/register"> Sign up</Link></p>
            </div>
        </AuthContainer>
)
}
