import { useState } from "react";
import { FaHome, FaBriefcase, FaSignOutAlt, FaBars, FaTimes, FaUser } from "react-icons/fa";

export default function StaffSidebar() {
    const [activeItem, setActiveItem] = useState("StaffDashboard");
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: "StaffDashboard", icon: <FaHome />, key: "StaffDashboard" },
        { name: "Issues", icon: <FaBriefcase />, key: "Issues" },
        { name: "Users", icon: <FaUser />, key: "Users" }
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
       

            
            {/* Main Content Area */}
            <div className="flex-1 min-h-screen w-full">
                <MainContent activeItem={activeItem} />
            </div>
        </div>
    );
}

// Component to display different content based on activeItem
function MainContent({ activeItem }) {
    switch (activeItem) {
        case "StaffDashboard":
            return <h2 className="text-2xl font-bold">Dashboard</h2>;
        case "Issues":
            return <h2 className="text-2xl font-bold">Issues Section</h2>;
        case "Users":
            return <h2 className="text-2xl font-bold">Users Section</h2>;
        case "Logout":
            return <h2 className="text-2xl font-bold text-red-600">Logging Out...</h2>;
        default:
            return <h2 className="text-2xl font-bold">Select an Option</h2>;
    }
}