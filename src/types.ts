
export interface Student {
  id: string;
  name: string;
  email: string;
  avatar: string;
  grade: string;
  performance: number; // 0-100
  attendance: number; // 0-100
  subjects: SubjectScore[];
  lastActive: string;
  status: 'active' | 'inactive';
}

export interface SubjectScore {
  name: string;
  score: number;
  trend: 'up' | 'down' | 'stable';
}

export interface DashboardStats {
  totalStudents: number;
  averagePerformance: number;
  attendanceRate: number;
  activeNow: number;
}

export interface Activity {
  id: string;
  type: 'grade' | 'attendance' | 'enrollment' | 'exam';
  studentName: string;
  message: string;
  timestamp: string;
}

export type Theme = 'light' | 'dark';
export type UserRole = 'teacher' | 'admin';
