import AddCircleIcon from "@mui/icons-material/AddCircle";
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import {useEvent, useUnit} from "effector-react";
import {
    $activeChatId,
    $chatPartner,
    $isChatActive,
    activeChatIdChanged,
    chatActivated, chatDeactivated
} from "../../../entities/chat/model.ts";
import {createInitials} from "../../../features/initials/CreateInitials.ts";

const ChatSelector = () => {
    const chats = useUnit($chatPartner);
    const activeChat = useUnit($activeChatId);
    const isActiveChat = useUnit($isChatActive);
    const changeActiveChatId = useEvent(activeChatIdChanged);
    const chatActivate = useEvent(chatActivated);
    const chatDectivate = useEvent(chatDeactivated);

    const handleSelectChat = (id: number) => {
        if (isActiveChat && activeChat == id) {
            chatDectivate()
            changeActiveChatId(null);
        } else {
            changeActiveChatId(id);
            chatActivate()
        }

    }


    return (
        <div className="py-4 px-6 my-4 grid gap-4 grid-cols-[repeat(4,minmax(70px,70px))] rounded-3xl bg-white">
            <div className="flex flex-col col-span-4 gap-4 min-h-0">
                <nav className="flex justify-between items-center w-full h-min ">
                    <h1 className="text-2xl">Chats</h1>
                    <AddCircleIcon
                        className="cursor-pointer duration-200 text-slate-600 hover:text-slate-800 text-2xl rounded-full !w-10 !h-10 "/>
                </nav>
                <div className="flex flex-col flex-grow min-h-0 gap-y-3 w-full overflow-y-auto  self-start items-start">
                    {chats.map(chat =>
                        <div onClick={() => handleSelectChat(chat.peer_id)}
                             className={`w-full hover:pr-4 duration-500 cursor-pointer hover:py-1 hover:px-2 flex items-center gap-x-2 rounded-3xl hover:bg-slate-100 ${activeChat == chat.peer_id && "bg-slate-100 p-2 pr-4"}`}>
                            <div
                                className="rounded-full text-center text-sm flex justify-center items-center bg-sky-200 !h-8 !w-8 aspect-square">
                                {createInitials(chat.chatPartner)}
                            </div>
                            <div className="flex flex-col overflow-x-hidden w-full">
                                <p className="text-black leading-none">{chat.chatPartner}</p>
                                <p className="w-full leading-none text-sm truncate">
                                    {chat.message}
                                </p>
                            </div>
                            <div className="h-full flex items-end flex-col justify-between ">
                                <p className="text-xs text-slate-600">{chat.time}</p>
                                {chat.you ? chat.read ? <DoneAllIcon className="w-3 h-3"/> :
                                    <DoneIcon className="w-3 h-3"/> : !chat.read && <div
                                    className="w-4 h-4 flex justify-center items-center bg-sky-200 rounded-full aspect-square text-xs">{chat.unread}</div>}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChatSelector;