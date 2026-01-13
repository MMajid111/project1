// import { useState } from "react";

// export default function ModeratorDashboardHeader() {
//   const [notifications, setNotifications] = useState(21);
//   const [settings, setSettings] = useState(19);

//   return (
//     <header className="flex items-center justify-between p-4 bg-white shadow-md">
//       {/* Search Box */}
//       <div className="flex items-center w-full max-w-sm border rounded-md px-3 py-2">
//         <input
//           type="text"
//           placeholder="Search here"
//           className="w-full outline-none text-gray-700"
//         />
//         <svg
//           className="w-5 h-5 text-gray-500"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M21 21l-4.35-4.35m1.9-4.15a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
//           ></path>
//         </svg>
//       </div>

//       {/* Icons */}
//       <div className="flex items-center space-x-4">
//         <div className="relative">
//           <svg
//             className="w-6 h-6 text-gray-600"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15 17h5l-1.4-2.3a7 7 0 1 0-9.2-9.2L7 5H2l2.3 2.3a7 7 0 1 0 9.2 9.2L17 15z"
//             />
//           </svg>
//           <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-2">
//             {notifications}
//           </span>
//         </div>
//         <div className="relative">
//           <svg
//             className="w-6 h-6 text-gray-600"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M12 3v2m4-2v2m-8-2v2m4 14v2m4-2v2m-8-2v2m8-14h2m-2 4h2m-2 4h2m-2 4h2M6 7H4m2 4H4m2 4H4m2 4H4"
//             />
//           </svg>
//           <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-2">
//             {settings}
//           </span>
//         </div>
//       </div>

//       {/* User Profile */}
//       <div className="relative flex items-center space-x-2 cursor-pointer group">
//         <img
//           src="/avatar.png"
//           alt="User Avatar"
//           className="w-10 h-10 rounded-full"
//         />
//         <div className="hidden sm:block text-right">
//           <p className="font-medium">Arsl</p>
//           <p className="text-xs text-gray-500">Moderator</p>
//         </div>
//         {/* Dropdown Menu */}
//         <div className="absolute right-0 mt-12 bg-white shadow-md rounded-md hidden group-hover:block">
//           <ul className="py-2 w-40">
//             <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
//             <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
//             <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
//           </ul>
//         </div>
//       </div>
//     </header>
//   );
// }
