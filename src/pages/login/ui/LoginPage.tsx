import Input from "../../../shared/ui/input/Input.tsx";
import {Link} from "react-router";

export default function LoginPage() {
    return (
        <div className="container">
            <div className="text-black grid gap-4 xs:grid-cols-4 md:grid-cols-8 lg:grid-cols-12 h-screen items-center">
                <div
                    className="md:col-start-6 md:col-span-3 lg:col-start-5 lg:col-span-4 py-5 px-10 bg-white h-min ">
                    <h1 className="text-4xl font-extrabold text-center mb-6">EXC!</h1>
                    <h1 className="text-2xl font-semibold text-center">Sign in</h1>
                    <p className="text-center">Welcome back! Please enter your details.</p>
                    <div className="mt-6 flex flex-col gap-4">
                        <Input placeholder="Your e-mail address" label="Email address" type="email"/>
                        <Input placeholder="Your password" label="Password" type="password"/>
                        <button className="w-full p-3 bg-slate-900 font-bold rounded-3xl text-gray-50 mt-2">Sign in
                        </button>
                        <p className="text-center">Don’t have an account?
                            <Link className="text-cyan-900 font-semibold" to="/register"> Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
