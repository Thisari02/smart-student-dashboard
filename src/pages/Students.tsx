
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  ChevronRight, 
  ExternalLink,
  Plus,
  Mail,
  Circle
} from 'lucide-react';
import { MOCK_STUDENTS } from '../constants';
import { Student } from '../types';

const Students: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('table');

  const filteredStudents = MOCK_STUDENTS.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Student Directory</h1>
          <p className="text-slate-500 text-sm">Manage and monitor {MOCK_STUDENTS.length} students enrolled in your courses.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 transition-all">
          <Plus size={18} />
          Add Student
        </button>
      </div>

      {/* Toolbar */}
      <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-gray-100 dark:border-slate-700 flex flex-col md:flex-row gap-4 items-center justify-between shadow-sm">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search students..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-50 dark:bg-slate-900 border-none pl-10 pr-4 py-2 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 border dark:border-slate-700 rounded-xl text-sm font-medium hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
            <Filter size={18} />
            Filters
          </button>
          <div className="flex bg-gray-100 dark:bg-slate-900 p-1 rounded-xl">
            <button 
              onClick={() => setViewMode('table')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${viewMode === 'table' ? 'bg-white dark:bg-slate-700 shadow-sm text-indigo-600' : 'text-slate-500'}`}
            >
              Table
            </button>
            <button 
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${viewMode === 'grid' ? 'bg-white dark:bg-slate-700 shadow-sm text-indigo-600' : 'text-slate-500'}`}
            >
              Grid
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      {viewMode === 'table' ? (
        <div className="bg-white dark:bg-slate-800 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 dark:bg-slate-900/50 text-slate-400 text-[10px] uppercase tracking-wider font-bold">
                  <th className="px-6 py-4">Student</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Grade Level</th>
                  <th className="px-6 py-4">Academic Score</th>
                  <th className="px-6 py-4">Attendance</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-slate-700">
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="group hover:bg-gray-50 dark:hover:bg-slate-750 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={student.avatar} className="w-10 h-10 rounded-xl object-cover" alt="" />
                        <div>
                          <p className="text-sm font-bold group-hover:text-indigo-600 transition-colors">{student.name}</p>
                          <p className="text-xs text-slate-400">{student.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase
                        ${student.status === 'active' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}>
                        <Circle size={8} fill="currentColor" />
                        {student.status}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">{student.grade}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 w-24 h-1.5 bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${student.performance > 90 ? 'bg-indigo-500' : student.performance > 80 ? 'bg-blue-500' : 'bg-amber-500'}`} 
                            style={{ width: `${student.performance}%` }} 
                          />
                        </div>
                        <span className="text-xs font-bold">{student.performance}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-sm font-bold ${student.attendance > 95 ? 'text-emerald-500' : 'text-slate-700 dark:text-slate-300'}`}>
                        {student.attendance}%
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link 
                          to={`/students/${student.id}`} 
                          className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-slate-700 rounded-lg transition-all"
                        >
                          <ChevronRight size={18} />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredStudents.length === 0 && (
            <div className="p-12 text-center">
              <div className="w-16 h-16 bg-gray-100 dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                <Search size={32} />
              </div>
              <h3 className="text-lg font-bold">No students found</h3>
              <p className="text-slate-500 text-sm">Try adjusting your search or filters to find what you're looking for.</p>
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map((student) => (
            <div key={student.id} className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 -mr-16 -mt-16 rounded-full group-hover:scale-110 transition-transform" />
              
              <div className="flex justify-between items-start mb-6">
                <img src={student.avatar} className="w-16 h-16 rounded-2xl object-cover ring-4 ring-white dark:ring-slate-800 shadow-lg" alt="" />
                <button className="p-2 text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-xl transition-colors">
                  <MoreVertical size={20} />
                </button>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold mb-1">{student.name}</h3>
                <p className="text-sm text-slate-400 flex items-center gap-1.5">
                  <Mail size={14} />
                  {student.email}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-3 bg-gray-50 dark:bg-slate-900 rounded-2xl">
                  <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Score</p>
                  <p className="text-lg font-bold text-indigo-600">{student.performance}%</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-slate-900 rounded-2xl">
                  <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Attendance</p>
                  <p className="text-lg font-bold text-emerald-600">{student.attendance}%</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{student.grade}</span>
                <Link 
                  to={`/students/${student.id}`} 
                  className="flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700"
                >
                  Profile
                  <ExternalLink size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Students;
