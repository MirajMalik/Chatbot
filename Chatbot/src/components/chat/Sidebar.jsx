export default function Sidebar() {

    return (
        <div className="w-64 border-r border-gray-800 p-4 mt-2 hidden md:block">

            <button className="w-full bg-gray-900 hover:bg-gray-800 p-3 rounded-xl transition">
                + New Chat
            </button>

            <div className="mt-6 space-y-2">

                <div className="bg-gray-700 p-3 rounded-xl cursor-pointer">
                    React Notes
                </div>

                <div className="bg-gray-700 p-3 rounded-xl cursor-pointer">
                    AI Project
                </div>

            </div>

        </div>
    );
}