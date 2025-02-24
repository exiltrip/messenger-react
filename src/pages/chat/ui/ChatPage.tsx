import Navbar from "../../../shared/ui/navbar/Navbar.tsx";
import ChatSelector from "./ChatSelector";
import NotSelected from "./NotSelected";
import ChatWindow from "./ChatWindow.tsx";
import {useUnit} from "effector-react/effector-react.umd";
import {$isChatActive} from "../../../entities/chat/model.ts";

const ChatPage = () => {

    const isChatSelected = useUnit($isChatActive);

    return (
        <div className="flex w-full h-screen text-slate-800 gap-4">
            <Navbar/>
            <ChatSelector/>
            {isChatSelected
                ? <ChatWindow/>
                : <NotSelected/>}

        </div>
    );
};

export default ChatPage;