import {createInitials} from "../../../features/initials/CreateInitials.ts";

const ChatWindow = () => {



    return (
        <main className="h-full grow m-2 md:h-auto md:mx-0 mr-4 md:my-4 w-full rounded-3xl bg-white text-slate-800">
            <nav className="py-4 px-6 border-b border-b-slate-300 w-full flex gap-4">
                <div
                    className="rounded-full text-center text-sm flex justify-center items-center bg-sky-200 !h-12 !w-12 aspect-square">
                    {createInitials("Ekaterina Zhelud")}
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-xl">Ekaterina Zhelud</h1>
                    <p className="text-sm">Online</p>
                </div>
                <div className="flex justify-end grow gap-3 items-center">
                    <button className="py-1 px-3 h-min text-slate-100 rounded-full bg-slate-900">
                        View profile
                    </button>
                </div>
            </nav>
        </main>
    );
};

export default ChatWindow;