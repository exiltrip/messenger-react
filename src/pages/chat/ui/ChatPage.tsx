import Navbar from "../../../shared/ui/navbar/Navbar.tsx";
import ChatSelector from "./ChatSelector";
import NotSelected from "./NotSelected";

const ChatPage = () => {

    const isChatSelected = false

    return (
        <div className="flex w-full h-screen text-slate-800">
            <Navbar/>
            <ChatSelector/>
            {isChatSelected
                ? ""
                : <NotSelected/>}

        </div>
    );
};

export default ChatPage;