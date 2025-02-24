import Input from "../../../shared/ui/input/Input.tsx";
import hero from "/hero.png"
import {useSnackbar} from "notistack";
import {Link} from "react-router";

export default function RegisterPage() {

  const { enqueueSnackbar } = useSnackbar();

  const handleLogin = () => {
    enqueueSnackbar(`Ошибка! Повторите позже.`, {'variant': 'error', 'className': "!rounded-xl !backdrop-blur-sm !bg-black/20 !text-red-500 !border !border-red-500/20"});
  }
  
  return (
        <div className="p-4 text-slate-800 w-full flex justify-between h-screen items-center">
          <div className="w-full grid gap-4 grid-cols-[repeat(4,minmax(50px,80px))] justify-center">
            <div className="col-span-4 py-5 px-10 h-min">
              <h1 className="text-2xl font-semibold ">Sign up</h1>
              <p className="">Welcome! Please enter your details.</p>
              <div className="mt-6 flex flex-col gap-4">
                <Input placeholder="Your full name" label="Full name" type="text"/>
                <Input placeholder="Your e-mail address" label="Email address" type="email"/>
                <Input placeholder="Your password" label="Password" type="password"/>
                <button onClick={handleLogin} className="pointer w-full p-3 bg-slate-900 font-bold rounded-3xl text-gray-50 mt-2">Sign in
                </button>
                <p className="text-center">Already have an account?
                  <Link className="text-cyan-900 font-semibold" to="/login"> Sign in</Link></p>
              </div>
            </div>
          </div>
          <img className="max-sm:hidden h-full rounded-2xl min-w-1/2 object-cover" src={hero} alt=""/>
        </div>
  );
}
