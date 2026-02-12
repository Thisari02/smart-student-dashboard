
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Mail, 
  MapPin, 
  Phone, 
  Calendar, 
  GraduationCap, 
  Download, 
  MessageSquare,
  TrendingUp,
  TrendingDown,
  BookOpen
} from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import { MOCK_STUDENTS } from '../constants';

const StudentProfile: React.FC = () => {
  const { id } = useParams();
  const student = MOCK_STUDENTS.find(s => s.id === id);

  if (!student) return <div className="p-10 text-center">Student not found.</div>;

  const radarData = student.subjects.map(s => ({
    subject: s.name,
    score: s.score,
    fullMark: 100,
  }));

  const progressHistory = [
    { name: 'W1', score: 72 },
    { name: 'W2', score: 75 },
    { name: 'W3', score: 82 },
    { name: 'W4', score: student.performance },
  ];

  return (
    <div className="space-y-6">
      {/* Header & Back Action */}
      <div className="flex items-center justify-between">
        <Link 
          to="/students" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-semibold transition-colors group"
        >
          <div className="p-2 rounded-xl bg-white dark:bg-slate-800 border dark:border-slate-700 group-hover:scale-110 transition-transform">
            <ArrowLeft size={18} />
          </div>
          Back to Directory
        </Link>
        <div className="flex gap-3">
          <button className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border dark:border-slate-700 text-slate-500 hover:text-indigo-600 transition-all shadow-sm">
            <MessageSquare size={20} />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 transition-all">
            <Download size={18} />
            Download Transcript
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column - Identity Card */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-3xl border border-gray-100 dark:border-slate-700 overflow-hidden shadow-sm">
            <div className="h-24 bg-gradient-to-r from-indigo-500 to-purple-500" />
            <div className="px-6 pb-6">
              <div className="relative flex justify-center -mt-12 mb-4">
                <img 
                  src={student.avatar} 
                  className="w-24 h-24 rounded-3xl object-cover ring-8 ring-white dark:ring-slate-800 shadow-xl" 
                  alt={student.name} 
                />
                <span className="absolute bottom-1 right-1/2 translate-x-12 w-5 h-5 bg-emerald-500 border-4 border-white dark:border-slate-800 rounded-full" />
              </div>
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold">{student.name}</h2>
                <p className="text-slate-400 text-sm font-medium">Student ID: #ST-29402</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <div className="p-2 rounded-lg bg-gray-50 dark:bg-slate-900"><Mail size={16} /></div>
                  <span className="truncate">{student.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <div className="p-2 rounded-lg bg-gray-50 dark:bg-slate-900"><MapPin size={16} /></div>
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <div className="p-2 rounded-lg bg-gray-50 dark:bg-slate-900"><Phone size={16} /></div>
                  <span>+1 (555) 012-3456</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t dark:border-slate-700">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Grade Level</p>
                    <div className="flex items-center gap-2">
                      <GraduationCap size={16} className="text-indigo-600" />
                      <span className="text-sm font-bold">{student.grade}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Joined</p>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-amber-500" />
                      <span className="text-sm font-bold">Aug 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-indigo-600 rounded-3xl text-white shadow-xl shadow-indigo-500/20 relative overflow-hidden group">
            <BookOpen className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-125 transition-transform" size={120} />
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <TrendingUp size={20} />
              Academic Status
            </h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1 opacity-80">
                  <span>OVERALL PROGRESS</span>
                  <span>{student.performance}%</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full" style={{ width: `${student.performance}%` }} />
                </div>
              </div>
              <p className="text-sm opacity-90 leading-relaxed">
                {student.name} is currently in the top 10% of their class. Consistent improvement observed in STEM subjects.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Stats & Insights */}
        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Subject Skills Radar */}
            <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm">
              <h3 className="font-bold mb-6">Subject Proficiency</h3>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 600 }} />
                    <Radar 
                      name={student.name} 
                      dataKey="score" 
                      stroke="#6366f1" 
                      fill="#6366f1" 
                      fillOpacity={0.6} 
                    />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Performance Over Time */}
            <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm">
              <h3 className="font-bold mb-6">Score History (Last 4 Weeks)</h3>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={progressHistory}>
                    <defs>
                      <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} domain={[60, 100]} />
                    <Tooltip />
                    <Area type="monotone" dataKey="score" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorScore)" strokeWidth={3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Subjects Table */}
          <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm overflow-hidden">
            <h3 className="font-bold mb-6">Subject Breakdown</h3>
            <div className="space-y-4">
              {student.subjects.map((sub, i) => (
                <div key={i} className="p-4 rounded-2xl bg-gray-50 dark:bg-slate-900 flex items-center justify-between group hover:shadow-md transition-all border border-transparent hover:border-indigo-100 dark:hover:border-indigo-900">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${sub.trend === 'up' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                      <BookOpen size={20} />
                    </div>
                    <div>
                      <p className="font-bold">{sub.name}</p>
                      <p className="text-xs text-slate-400">Current Semester</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-right">
                      <p className="text-sm font-bold">{sub.score}%</p>
                      <div className="flex items-center gap-1 text-[10px] font-bold uppercase">
                        {sub.trend === 'up' ? (
                          <><TrendingUp size={12} className="text-emerald-500" /><span className="text-emerald-500">Improving</span></>
                        ) : (
                          <><TrendingDown size={12} className="text-slate-400" /><span className="text-slate-400">Steady</span></>
                        )}
                      </div>
                    </div>
                    <div className="w-16 h-16 relative">
                       <svg className="w-full h-full transform -rotate-90">
                        <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-gray-200 dark:text-slate-700" />
                        <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray={175.9} strokeDashoffset={175.9 - (175.9 * sub.score) / 100} className="text-indigo-600" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
