
import React from 'react';
import { 
  BarChart3, 
  Download, 
  Share2, 
  ArrowUpRight, 
  AlertCircle, 
  CheckCircle2,
  Clock,
  PieChart as PieChartIcon
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { SUBJECT_DATA, PERFORMANCE_DATA } from '../constants';

const Reports: React.FC = () => {
  const COLORS = ['#6366f1', '#f59e0b', '#10b981', '#f43f5e', '#8b5cf6'];

  const reports = [
    { title: 'Semester Grade Summary', date: 'Feb 24, 2024', status: 'ready', size: '2.4 MB' },
    { title: 'Class 12-B Performance', date: 'Feb 22, 2024', status: 'ready', size: '1.1 MB' },
    { title: 'Subject Competition Data', date: 'Feb 20, 2024', status: 'processing', size: 'Calculating...' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Analytics & Reports</h1>
          <p className="text-slate-500 text-sm">Review institute-wide academic trends and generate deep-dive reports.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border dark:border-slate-700 rounded-xl text-sm font-semibold hover:bg-gray-50 dark:hover:bg-slate-800 transition-all shadow-sm">
            <Share2 size={18} />
            Share Dashboard
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 transition-all">
            <BarChart3 size={18} />
            Generate New Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Key Metrics */}
        <div className="lg:col-span-2 space-y-6">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm">
            <h3 className="font-bold mb-8">Subject performance benchmark</h3>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={SUBJECT_DATA}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="subject" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <Tooltip cursor={{fill: 'transparent'}} />
                  <Legend />
                  <Bar dataKey="performance" name="Actual Performance" fill="#6366f1" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="target" name="Target Benchmark" fill="#e2e8f0" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="p-6 bg-emerald-50 dark:bg-emerald-900/10 rounded-3xl border border-emerald-100 dark:border-emerald-900/30 flex items-start gap-4">
               <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl shrink-0">
                 <CheckCircle2 size={24} />
               </div>
               <div>
                 <h4 className="font-bold text-emerald-900 dark:text-emerald-400 mb-1">Strongest Area</h4>
                 <p className="text-sm text-emerald-700/80 dark:text-emerald-500/80 mb-3">Literary arts has shown a 15% increase in engagement and scores this semester.</p>
                 <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 uppercase tracking-wider">
                   Explore Data <ArrowUpRight size={14} />
                 </div>
               </div>
             </div>

             <div className="p-6 bg-rose-50 dark:bg-rose-900/10 rounded-3xl border border-rose-100 dark:border-rose-900/30 flex items-start gap-4">
               <div className="p-3 bg-rose-100 text-rose-600 rounded-xl shrink-0">
                 <AlertCircle size={24} />
               </div>
               <div>
                 <h4 className="font-bold text-rose-900 dark:text-rose-400 mb-1">Attention Required</h4>
                 <p className="text-sm text-rose-700/80 dark:text-rose-500/80 mb-3">Mathematics scores for Class 10-A are 8% below the regional average benchmark.</p>
                 <div className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 uppercase tracking-wider">
                   Action Plan <ArrowUpRight size={14} />
                 </div>
               </div>
             </div>
          </div>
        </div>

        {/* Available Reports & Downloads */}
        <div className="space-y-6">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm">
             <h3 className="font-bold mb-6">Recent Reports</h3>
             <div className="space-y-4">
                {reports.map((report, idx) => (
                  <div key={idx} className="p-4 rounded-2xl border border-gray-50 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-900 transition-all group">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                         <div className="p-2 bg-indigo-50 dark:bg-slate-900 text-indigo-600 rounded-lg">
                           <Download size={18} />
                         </div>
                         <div>
                            <p className="text-sm font-bold truncate max-w-[140px]">{report.title}</p>
                            <p className="text-[10px] text-slate-400 font-medium uppercase">{report.date}</p>
                         </div>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase
                        ${report.status === 'ready' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                        {report.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-[10px] text-slate-400 font-bold">{report.size}</span>
                      {report.status === 'ready' && (
                        <button className="text-xs font-bold text-indigo-600 hover:underline">Download PDF</button>
                      )}
                    </div>
                  </div>
                ))}
             </div>
             <button className="w-full mt-6 py-3 border border-dashed dark:border-slate-700 rounded-2xl text-slate-400 hover:text-indigo-600 hover:border-indigo-400 transition-all text-sm font-semibold">
               Archive Previous Years
             </button>
          </div>

          <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl text-white shadow-xl">
             <div className="flex items-center gap-3 mb-4">
               <PieChartIcon className="text-indigo-400" />
               <h4 className="font-bold">Summary Insights</h4>
             </div>
             <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Total Exams</span>
                  <span className="font-bold">142</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Avg Attendance</span>
                  <span className="font-bold text-emerald-400">94.2%</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Pass Percentage</span>
                  <span className="font-bold text-indigo-400">98.1%</span>
                </div>
                <div className="h-px bg-slate-700 my-2" />
                <p className="text-xs text-slate-400 leading-relaxed italic">
                  "Institutional performance has surpassed the annual goal by 4.2% as of Q1 reports."
                </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
