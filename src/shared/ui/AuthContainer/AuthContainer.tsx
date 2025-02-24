const AuthContainer = ({
                           children,
                       }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="flex items-center justify-center w-full">
            <div className="text-black w-min grid gap-4 grid-cols-[repeat(4,minmax(50px,80px))] md:grid-cols-[repeat(8,minmax(60px,80px))] lg:grid-cols-[repeat(12,minmax(70px,80px))] h-screen items-center">
                <div className="col-start-1 col-span-4 md:col-start-3 md:col-span-4 lg:col-start-5 lg:col-span-4 bg-white h-min ">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AuthContainer;