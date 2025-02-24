import AddCircleIcon from "@mui/icons-material/AddCircle";
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';

const ChatSelector = () => {

    const chats = [
        {"you": false, "chatPartner": "Екатерина Желудь", "message": "чд?", "read": false, "time": "17:02"},
        {
            "you": true,
            "chatPartner": "Антон Педалин",
            "message": "ок. тогда не забудь сдать это до дд",
            "read": false,
            "time": "13:20"
        },
        {
            "you": false,
            "chatPartner": "Maximillian S",
            "message": "Я люблю макдональс! Он вдохновляет меня на жизнь.",
            "read": true,
            "time": "11:42"
        },
        {
            "you": true,
            "chatPartner": "Noname Kakoito",
            "message": "privet",
            "read": true,
            "time": "09:01"
        },
        {
            "you": false,
            "chatPartner": "Ангелина Петрова", "message": "Здравствуйте! По чем работы?", "read": true,
            "time": "20.09.23"
        },
    ]
    const initials = (fullname: string) => {
        return (fullname.split(" ").map(word => word[0].toUpperCase()).join(""))
    }

    return (
        <div className="py-4 px-6 m-4 grid gap-4 grid-cols-[repeat(4,minmax(50px,80px))] rounded-3xl bg-white">
            <div className="flex flex-col col-span-4 gap-4 min-h-0">
                <nav className="flex justify-between items-center w-full h-min ">
                    <h1 className="text-2xl">Chats</h1>
                    <AddCircleIcon
                        className="cursor-pointer duration-200 text-slate-600 hover:text-slate-800 text-2xl rounded-full !w-10 !h-10 "/>
                </nav>
                <div className="flex flex-col flex-grow min-h-0 w-full overflow-y-auto  self-start items-start">
                    {chats.map(chat =>
                        <div className="w-full py-3 flex items-center gap-2">
                            <div
                                className="rounded-full text-center flex justify-center items-center bg-sky-200 !h-9 !w-9 aspect-square">
                                {initials(chat.chatPartner)}
                            </div>
                            <div className="flex flex-col overflow-x-hidden w-full">
                                <p className="text-black">{chat.chatPartner}</p>
                                <p className="w-full truncate">
                                    {chat.message}
                                </p>
                            </div>
                            <div className="h-full flex items-end flex-col justify-between ">
                                <p className="text-sm text-slate-600">{chat.time}</p>
                                {chat.you ? chat.read ? <DoneAllIcon/> : <DoneIcon/> : !chat.read && <div className="w-5 h-5 flex justify-center items-center bg-sky-200 rounded-full aspect-square text-xs">1</div>}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChatSelector;