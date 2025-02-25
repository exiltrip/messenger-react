import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import logo from '/logo-dark.png'
import {useLocation} from "react-router";

const Navbar = () => {
    const userData = {fullname: "Vladimir S"}
    const initials = userData.fullname
        .split(" ")
        .map(word => word[0].toUpperCase())
        .join("");

    return (
        <nav className="w-screen gap-x-2 md:gap-x-0 h-min py-2 md:py-8 px-6 md:w-min md:h-screen flex md:flex-col md:gap-y-10">
            <div className="flex md:flex-col grow-0 gap-2">
                <img className="self-center !w-12 !h-12" src={logo}/>
                <button className={`cursor-pointer duration-500 hover:bg-slate-300 rounded-3xl md:w-full ${useLocation().pathname.startsWith("/chat") ? "text-white bg-slate-500 active:text-slate-500 active:bg-slate-400" : "active:text-white active:bg-slate-500"} px-4 md:px-6 py-2`}><ChatBubbleOutlineOutlinedIcon/></button>
                <button className="cursor-pointer duration-500 hover:bg-slate-300 rounded-3xl md:w-full active:text-white active:bg-slate-500 px-4 md:px-6 py-2"><PhoneOutlinedIcon/></button>
                <button className="cursor-pointer duration-500 hover:bg-slate-300 rounded-3xl md:w-full active:text-white active:bg-slate-500 px-4 md:px-6 py-2"><PeopleOutlinedIcon/></button>
            </div>

            <div className="flex w-full md:flex-col items-center md:h-full grow justify-end gap-1">
                <p className="hidden md:block font-light text-sm text-center">Account</p>
                <button className="cursor-pointer duration-500 hover:bg-slate-300 rounded-3xl md:w-full active:text-white active:bg-slate-500 px-4 md:px-6 py-2"><SettingsOutlinedIcon/></button>
            </div>

            <div className="flex md:flex-col items-center grow-0 justify-end gap-2">
                <button className="cursor-pointer duration-200 rounded-full w-full active:text-white  active:scale-110 bg-sky-200 h-10 !w-10">
                    {initials}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;