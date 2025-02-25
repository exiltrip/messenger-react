import {createInitials} from "../../../features/initials/CreateInitials.ts";
import SendIcon from '@mui/icons-material/Send';
import DoneAllIcon from "@mui/icons-material/DoneAll";
import {useUnit} from "effector-react";
import {$activeChat, $activeChatPartnerName, $chatMessages} from "../../../entities/chat/model.ts";
import {useEffect, useState} from "react";
import {formatDate} from "../../../shared/FormatDate.ts";
import DoneIcon from "@mui/icons-material/Done";

const ChatWindow = () => {

    const clientPeerId = 1
    const activeChat = useUnit($activeChat);
    const [activeChatMessages, setActiveChatMessages] = useState([])

    const chatPartnerName = useUnit($activeChatPartnerName);


    useEffect(() => {
        $chatMessages.watch(messages => {
            setActiveChatMessages(messages)
        });

    }, [activeChat]);

    return (
        <main className="md:w-full h-full md:h-auto m-2 md:mr-4  md:my-4 md:mx-0 flex">
        <div className="grow w-full rounded-3xl bg-white text-slate-800 flex flex-col">
            <nav className="py-4 px-6 border-b border-b-slate-300 w-full flex gap-4 h-auto">
                <div
                    className="rounded-full text-center text-sm flex justify-center items-center bg-sky-200 !h-12 !w-12 aspect-square">
                    {createInitials("Ekaterina Zhelud")}
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-xl">{chatPartnerName}</h1>
                    <p className="text-sm">Online</p>
                </div>
                <div className="flex justify-end grow gap-3 items-center">
                    <button className="text-xs md:text-md py-1 px-2 md:px-3 h-min text-slate-100 rounded-full bg-slate-900">
                        View profile
                    </button>
                </div>
            </nav>

            <div className="w-full flex flex-col h-full">

                {activeChatMessages.length > 0 && activeChatMessages.map((message, index) => (
                    <div key={index} className={`w-full p-2 grow-0 flex flex-col `}>
                        <div className={`min-w-min max-w-max bg-slate-200 flex py-1 px-3 rounded-2xl ${message.peer_id !== clientPeerId && "mr-5 md:mr-20"} ${message.peer_id == clientPeerId && "self-end"} ${message.peer_id == clientPeerId ? "rounded-tr-none" : "rounded-tl-none"}`}>{message.message}
                            <i className="text-nowrap text-xs text-slate-500 self-end pl-1">{formatDate(message.timestamp)}</i>
                            {message.peer_id === clientPeerId ? message.read ? <DoneAllIcon className="!size-5 text-slate-600 self-end pl-1"/>: <DoneIcon className="!size-5 text-slate-600 self-end pl-1"/> : ""}
                        </div>

                    </div>
                ))}


            </div>
            <div className="w-full p-3 border-t border-t-slate-300 h-auto">
                <div className="w-full flex items-center p-2 border border-slate-300 rounded-2xl">
                    <input placeholder="New message..." type="text" className="w-full bg-none outline-none border-none"/>
                    <button className="!aspect-square cursor-pointer duration-500 active:text-slate-700 hover:text-slate-500 flex justify-center items-center"><SendIcon/></button>
                </div>
            </div>
        </div>
        </main>
    );
};

export default ChatWindow;