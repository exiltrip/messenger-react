import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import logo from '/logo-dark.png'

const Navbar = () => {
    const userData = {fullname: "Vladimir S"}
    const initials = userData.fullname
        .split(" ")
        .map(word => word[0].toUpperCase())
        .join("");

    return (
        <nav className="py-8 px-6 w-min h-screen flex flex-col gap-y-10">
            <menu className="flex flex-col grow-0 gap-2">
                <img className="self-center !w-10 !h-10" src={logo}/>
                <button className="cursor-pointer duration-500 hover:bg-slate-300 rounded-3xl w-full active:text-white active:bg-slate-500 px-6 py-2"><ChatBubbleOutlineOutlinedIcon/></button>
                <button className="cursor-pointer duration-500 hover:bg-slate-300 rounded-3xl w-full active:text-white active:bg-slate-500 px-6 py-2"><PhoneOutlinedIcon/></button>
                <button className="cursor-pointer duration-500 hover:bg-slate-300 rounded-3xl w-full active:text-white active:bg-slate-500 px-6 py-2"><PeopleOutlinedIcon/></button>
            </menu>

            <menu className="flex flex-col items-center h-full grow justify-end gap-1">
                <p className="font-light text-sm text-center">Account</p>
                <button className="cursor-pointer duration-500 hover:bg-slate-300 rounded-3xl w-full active:text-white active:bg-slate-500 px-6 py-2"><SettingsOutlinedIcon/></button>
            </menu>

            <menu className="flex flex-col items-center grow-0 justify-end gap-2">
                <button className="cursor-pointer duration-200 rounded-full w-full active:text-white  active:scale-110 bg-sky-200 h-10 !w-10">
                    {initials}
                </button>
            </menu>
        </nav>
    );
};

export default Navbar;