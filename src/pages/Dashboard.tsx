
import React from 'react';
import { Users, Trophy, CalendarCheck, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PERFORMANCE_DATA, MOCK_ACTIVITIES } from '../constants';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

/**
 * High-level analytics overview for teachers.
 */
const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Total Students', value: '1,284', icon: Users, color: 'indigo', change: '+12%', up: true },
    { title: 'Avg. Performance', value: '88.4%', icon: Trophy, color: 'amber', change: '+2.4%', up: true },
    { title: 'Attendance Rate', value: '94.2%', icon: CalendarCheck, color: 'emerald', change: '-1.2%', up: false },
    { title: 'Active Sessions', value: '342', icon: TrendingUp, color: 'purple', change: '+18%', up: true },
  ];

  return (
    <div className="space-y-8 pb-12">
      <header>
        <h1 className="text-3xl font-extrabold tracking-tight">Academic Pulse</h1>
        <p className="text-slate-500 mt-1">Institutional performance and engagement metrics for the current semester.</p>
      </header>

      {/* Analytics Summary */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:ring-2 ring-indigo-500/10">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-2xl bg-${stat.color}-500/10 text-${stat.color}-600`}>
                <stat.icon size={24} />
              </div>
              <div className={`flex items-center text-xs font-bold ${stat.up ? 'text-emerald-500' : 'text-rose-500'}`}>
                {stat.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.change}
              </div>
            </div>
            <p className="text-sm font-medium text-slate-400">{stat.title}</p>
            <h3 className="text-3xl font-bold mt-1 tracking-tight">{stat.value}</h3>
          </Card>
        ))}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Performance Trends */}
        <Card title="Performance Trends" subtitle="Monthly average grade comparison" className="lg:col-span-2">
          <div className="h-[320px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={PERFORMANCE_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)' }} />
                <Line type="monotone" dataKey="avg" stroke="#6366f1" strokeWidth={4} dot={{r: 6, fill: '#6366f1', strokeWidth: 2, stroke: '#fff'}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Activity Feed */}
        <Card title="Recent Activity" action={<button className="text-xs font-bold text-indigo-600">View All</button>}>
          <div className="space-y-6 mt-2">
            {MOCK_ACTIVITIES.slice(0, 4).map((act) => (
              <div key={act.id} className="flex gap-4 group">
                <div className="mt-1 w-2 h-2 rounded-full bg-indigo-500 shrink-0 group-hover:scale-150 transition-transform" />
                <div>
                  <p className="text-sm font-semibold leading-tight">
                    <span className="text-indigo-600">{act.studentName}</span> {act.message}
                  </p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mt-1 tracking-widest">{act.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
