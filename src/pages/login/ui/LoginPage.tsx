import Input from "../../../shared/ui/input/Input.tsx";
import {Link} from "react-router";
import AuthContainer from "../../../shared/ui/AuthContainer/AuthContainer.tsx";
import {useAuth} from "../../../hooks/useAuth.ts";
import {useState} from "react";

export default function LoginPage() {

    const { login } = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    return (
        <AuthContainer>
            <h1 className="text-4xl font-extrabold text-center mb-6">MSG!</h1>
            <h1 className="text-2xl font-semibold text-center">Sign in</h1>
            <p className="text-center">Welcome back! Please enter your details.</p>
            <div className="mt-6 flex flex-col gap-4">
                <Input value={email} onChange={e => setEmail(e.target.value)} placeholder="Your e-mail address" label="Email address" type="email"/>
                <Input value={password} onChange={e => setPassword(e.target.value)} placeholder="Your password" label="Password" type="password"/>
                <button onClick={() => login({email, password})} className="w-full p-3 bg-slate-900 font-bold rounded-3xl text-gray-50 mt-2">Sign
                    in
                </button>
                <p className="text-center">Don’t have an account?
                    <Link className="text-cyan-900 font-semibold" to="/register"> Sign up</Link></p>
            </div>
        </AuthContainer>
)
}
