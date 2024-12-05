const StackPage = () => {
    return (
        <div className="flex h-screen overflow-y-hidden bg-gradient-to-r from-[#1F4E95] to-black">
            <div className="absolute h-[40rem] w-[15rem] bg-[#1C1C1C] left-1/4 top-[13.25rem] border-4 rounded-xl border-[#5293F3] blur-sm"></div>
            <div className="relative h-[40rem] w-[15rem] bg-[#1C1C1C] left-1/4 top-20 border-4 rounded-xl border-[#5293F3]">
                <div className="relative top-[10.75rem] left-[0.3rem] w-56 h-56 border-4 rounded-xl border-[#FF8000]"></div>
                <div className="absolute top-[10.75rem] left-[0.3rem] w-56 h-56 border-4 rounded-xl border-[#FF8000] blur-sm"></div>
                <div className="relative top-[11.25rem] left-[0.3rem] w-56 h-56 border-4 rounded-xl border-[#FF8000]"></div>
                <div className="absolute top-[25.25rem] left-[0.3rem] w-56 h-56 border-4 rounded-xl border-[#FF8000] blur-sm"></div>
            </div>
            <div className="relative left-1/3 text-center bg-red-50">
                <div className="relative top-10 text-white font-semibold text-7xl">
                    Stack
                </div>
                <div className="relative top-[5rem] font-medium text-3xl text-white w-[40rem]">
                    This is the stack paragraph
                </div>
            </div>
        </div>
    );
};

export default StackPage;
