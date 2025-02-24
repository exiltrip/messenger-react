import logo from "/logo-dark.png";

const NotSelected = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <img className="max-w-64 opacity-10" src={logo} alt=""/>
            <h1 className="text-center text-3xl">Messenger</h1>
            <p className="text-slate-600 text-center">
                Select chat to message.
                <br/>
                Your personal messages are end-to-end encrypted.</p>
        </div>
    );
};

export default NotSelected;