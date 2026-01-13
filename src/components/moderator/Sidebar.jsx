import { useState } from "react";
import { FaHome, FaBriefcase, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";

export default function ModeratorSidebar() {
    const [activeItem, setActiveItem] = useState("Dashboard");
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: "Dashboard", icon: <FaHome />, key: "Dashboard" },
        { name: "Business", icon: <FaBriefcase />, key: "Business" }
    ];
    
    return (
        <div className="flex">
            {/* Mobile Navbar */}
            <div className="md:hidden fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-between items-center z-50">
                <h1 className="text-2xl font-bold">
                    Reviewer<span className="text-blue-600">.</span>
                </h1>
                <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 text-2xl">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg p-6 pl-12 flex flex-col justify-between transition-transform duration-300 
                ${isOpen ? "translate-x-0" : "-translate-x-64"} md:translate-x-0 md:static z-50`}>

                {/* Sidebar Header */}
                <div>
                    <h1 className="text-3xl font-bold">
                        Reviewer<span className="text-blue-600">.</span>
                    </h1>
                    <p className="text-gray-400 mt-1 text-sm">Moderator Dashboard</p>

                    {/* Menu Items */}
                    <nav className="mt-6 flex flex-col space-y-2">
                        {menuItems.map((item) => (
                            <button
                                key={item.key}
                                onClick={() => {
                                    setActiveItem(item.key);
                                    setIsOpen(false); // Auto-close sidebar on mobile
                                }}
                                className={`flex items-center gap-3 p-3 rounded-xl w-full text-left transition ${activeItem === item.key
                                        ? "bg-blue-100 text-blue-600 font-semibold"
                                        : "text-gray-600 hover:bg-gray-100"
                                    }`}
                            >
                                {item.icon}
                                <span className="text-md">{item.name}</span>
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Logout Button (Fixed at Bottom) */}
                <button
                    onClick={() => setActiveItem("Logout")}
                    className={`flex items-center gap-3 p-3 rounded-xl w-full text-left transition ${activeItem === "Logout"
                            ? "bg-blue-100 text-blue-600 font-semibold"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                >
                    <FaSignOutAlt />
                    <span className="text-md">Logout</span>
                </button>
            </div>

            {/* Overlay for Mobile when Sidebar is Open */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Main Content Area */}
            <div className="flex-1 p-6  bg-gray-100 min-h-screen w-full">
                <MainContent activeItem={activeItem} />
            </div>
        </div>
    );
}

// Component to display different content based on activeItem
function MainContent({ activeItem }) {
    switch (activeItem) {
        case "Dashboard":
            return <h2 className="text-2xl font-bold">Welcome to the Dashboard</h2>;
        case "Business":
            return <h2 className="text-2xl font-bold">Business Section</h2>;
        case "Logout":
            return <h2 className="text-2xl font-bold text-red-600">Logging Out...</h2>;
        default:
            return <h2 className="text-2xl font-bold">Select an Option</h2>;
    }
}
