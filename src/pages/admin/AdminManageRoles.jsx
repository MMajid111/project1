import React, { useState } from 'react';
import { useTheme } from '../../ThemeContext';
import { FaChevronLeft, FaEye, FaEyeSlash, FaTimes } from 'react-icons/fa';

const mockEmployees = [
  { id: 1, name: 'Ali', role: 'Moderator', joiningDate: '17/10/2023', contact: '' },
  { id: 2, name: 'Rehman', role: 'Support staff', joiningDate: '17/10/2023', contact: '' },
  { id: 3, name: 'Rehman', role: '+92 305 5533 069', joiningDate: '17/10/2023', contact: '' },
];

const roles = ['Moderator', 'Support staff', 'Admin'];

export default function AdminManageRoles() {
  const { isDark } = useTheme();
  const [employees, setEmployees] = useState(mockEmployees);
  const [modal, setModal] = useState({ open: false, employeeId: null });
  const [toast, setToast] = useState({ show: false, message: '' });
  const [addModal, setAddModal] = useState(false);
  const [role, setRole] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRemoveClick = (id) => {
    setModal({ open: true, employeeId: id });
  };

  const confirmRemove = () => {
    setEmployees((prev) => prev.filter((e) => e.id !== modal.employeeId));
    setToast({ show: true, message: 'Employee removed.' });
    setModal({ open: false, employeeId: null });
    setTimeout(() => setToast({ show: false, message: '' }), 2000);
  };

  const handleAddEmployee = () => {
    setAddModal(true);
    setRole('');
    setNumber('');
    setPassword('');
    setShowPassword(false);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!role || !number || !password) return;
    setEmployees((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: number,
        role,
        joiningDate: new Date().toLocaleDateString('en-GB'),
        contact: number,
      },
    ]);
    setAddModal(false);
    setToast({ show: true, message: 'Employee registered.' });
    setTimeout(() => setToast({ show: false, message: '' }), 2000);
  };

  return (
    <div className={`transition-colors min-h-screen ${isDark ? 'bg-[#181F2A] text-white' : 'bg-white text-black'}`}>
      <div className="p-8 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="text-base font-semibold">All</span>
            <span className="text-gray-400 text-lg">▼</span>
          </div>
          <button className="bg-[#4169E1] text-white px-6 py-2 rounded-lg font-semibold text-sm" onClick={handleAddEmployee}>Add Employee</button>
        </div>
        <div className="overflow-x-hidden rounded-xl">
          <table className="w-full min-w-[900px] bg-[#22304A] rounded-xl text-sm">
            <thead>
              <tr className="text-left text-gray-400 text-sm">
                <th className="py-3 px-4">S. No</th>
                <th className="py-3 px-4">Employee</th>
                <th className="py-3 px-4">Role</th>
                <th className="py-3 px-4">Joining Date</th>
                <th className="py-3 px-4">-------------</th>
                <th className="py-3 px-4">Action Perform</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, i) => (
                <tr key={emp.id} className="border-t border-[#1B2431] text-white text-sm">
                  <td className="py-3 px-4">{i + 1}</td>
                  <td className="py-3 px-4">{emp.name}</td>
                  <td className="py-3 px-4">{emp.role}</td>
                  <td className="py-3 px-4">{emp.joiningDate}</td>
                  <td className="py-3 px-4">----------</td>
                  <td className="py-3 px-4 flex gap-2">
                    <button className="bg-teal-400 hover:bg-teal-500 text-white px-6 py-2 rounded-lg font-semibold transition text-sm">Change</button>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition text-sm" onClick={() => handleRemoveClick(emp.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Remove Modal */}
      {modal.open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className={`rounded-xl p-8 w-full max-w-md ${isDark ? 'bg-[#22304A] text-white' : 'bg-white text-black'}`}>
            <h3 className="text-lg font-bold mb-4">Are you sure?</h3>
            <p className="mb-6">Are you sure you want to remove this employee?</p>
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 rounded-lg bg-gray-300 text-gray-800 hover:bg-gray-400"
                onClick={() => setModal({ open: false, employeeId: null })}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
                onClick={confirmRemove}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Add Employee Modal */}
      {addModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="rounded-2xl shadow-2xl p-8 w-full max-w-lg bg-[#313A49] relative">
            <button className="absolute top-6 left-6 text-gray-300 flex items-center gap-2 hover:text-white" onClick={() => setAddModal(false)}>
              <FaChevronLeft className="mr-1" /> Back
            </button>
            <h2 className="text-xl font-semibold mb-8 mt-2 text-gray-200">Add New Employee</h2>
            <form onSubmit={handleRegister} className="space-y-6">
              {/* Role Dropdown */}
              <div className="relative">
                <select
                  className="w-full bg-[#232B38] text-gray-400 rounded-lg px-6 py-4 pr-10 focus:outline-none appearance-none text-base"
                  value={role}
                  onChange={e => setRole(e.target.value)}
                >
                  <option value="">Assign role</option>
                  {roles.map(r => <option key={r}>{r}</option>)}
                </select>
                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 text-lg">▼</span>
              </div>
              {/* Number Input */}
              <div className="relative">
                <input
                  type="text"
                  className="w-full bg-[#232B38] text-gray-400 rounded-lg px-6 py-4 pr-10 focus:outline-none text-base"
                  placeholder="Enter Number"
                  value={number}
                  onChange={e => setNumber(e.target.value)}
                />
                {number && (
                  <button type="button" className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white" onClick={() => setNumber('')}>
                    <FaTimes />
                  </button>
                )}
              </div>
              {/* Password Input */}
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-full bg-[#232B38] text-gray-400 rounded-lg px-6 py-4 pr-10 focus:outline-none text-base"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <button type="button" className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white" onClick={() => setShowPassword(v => !v)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <button type="submit" className="w-full bg-[#4169E1] text-white py-3 rounded-lg font-semibold text-base mt-2">Register</button>
            </form>
          </div>
        </div>
      )}
      {/* Toast */}
      {toast.show && (
        <div className="fixed top-8 right-8 z-50 px-6 py-3 rounded-lg shadow-lg font-semibold transition-all bg-red-600 text-white">
          {toast.message}
        </div>
      )}
    </div>
  );
} 