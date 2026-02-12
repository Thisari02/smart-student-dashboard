
import { Student, Activity } from './types';

export const MOCK_STUDENTS: Student[] = [
  {
    id: '1',
    name: 'Saarah Dias',
    email: 'saarah.d@edu.pulse',
    avatar: 'https://picsum.photos/seed/saarah/100/100',
    grade: '10th Grade',
    performance: 88,
    attendance: 94,
    status: 'active',
    lastActive: '2 mins ago',
    subjects: [
      { name: 'Mathematics', score: 92, trend: 'up' },
      { name: 'Physics', score: 85, trend: 'stable' },
      { name: 'Literature', score: 88, trend: 'up' }
    ]
  },
  {
    id: '2',
    name: 'Nimesh Fernando',
    email: 'nimesh.f@edu.pulse',
    avatar: 'https://picsum.photos/seed/nimesh/100/100',
    grade: '12th Grade',
    performance: 92,
    attendance: 98,
    status: 'active',
    lastActive: 'Just now',
    subjects: [
      { name: 'Advanced Calculus', score: 95, trend: 'up' },
      { name: 'Economics', score: 89, trend: 'up' },
      { name: 'History', score: 92, trend: 'stable' }
    ]
  },
  {
    id: '3',
    name: 'Anuk Ravindu',
    email: 'anuk.r@edu.pulse',
    avatar: 'https://picsum.photos/seed/anuk/100/100',
    grade: '11th Grade',
    performance: 76,
    attendance: 82,
    status: 'inactive',
    lastActive: '5 hours ago',
    subjects: [
      { name: 'Biology', score: 72, trend: 'down' },
      { name: 'Chemistry', score: 78, trend: 'stable' },
      { name: 'English', score: 78, trend: 'up' }
    ]
  },
  {
    id: '4',
    name: 'Sideth Thewmika',
    email: 'sideth.t@edu.pulse',
    avatar: 'https://picsum.photos/seed/sideth/100/100',
    grade: '10th Grade',
    performance: 84,
    attendance: 90,
    status: 'active',
    lastActive: '12 mins ago',
    subjects: [
      { name: 'Computer Science', score: 91, trend: 'up' },
      { name: 'Art', score: 78, trend: 'down' },
      { name: 'French', score: 83, trend: 'stable' }
    ]
  },
  {
    id: '5',
    name: 'Kesha Ayendri',
    email: 'kesha.a@edu.pulse',
    avatar: 'https://picsum.photos/seed/kesha/100/100',
    grade: '12th Grade',
    performance: 95,
    attendance: 99,
    status: 'active',
    lastActive: '1 min ago',
    subjects: [
      { name: 'Philosophy', score: 98, trend: 'up' },
      { name: 'Psychology', score: 94, trend: 'stable' },
      { name: 'Political Science', score: 93, trend: 'up' }
    ]
  }
];

export const MOCK_ACTIVITIES: Activity[] = [
  {
    id: 'act1',
    type: 'grade',
    studentName: 'Nimesh Fernando',
    message: 'submitted Biology Assignment 4',
    timestamp: '10:45 AM'
  },
  {
    id: 'act2',
    type: 'enrollment',
    studentName: 'New Student',
    message: 'Jameson Locke joined Class 10-B',
    timestamp: '09:30 AM'
  },
  {
    id: 'act3',
    type: 'attendance',
    studentName: 'Anuk Ravindu',
    message: 'marked absent for Morning Session',
    timestamp: '08:15 AM'
  },
  {
    id: 'act4',
    type: 'exam',
    studentName: 'Saarah Dias',
    message: 'scored 94/100 in Physics Quiz',
    timestamp: 'Yesterday'
  }
];

export const PERFORMANCE_DATA = [
  { month: 'Sep', avg: 78 },
  { month: 'Oct', avg: 82 },
  { month: 'Nov', avg: 80 },
  { month: 'Dec', avg: 85 },
  { month: 'Jan', avg: 88 },
  { month: 'Feb', avg: 86 }
];

export const SUBJECT_DATA = [
  { subject: 'Math', performance: 85, target: 80 },
  { subject: 'Science', performance: 78, target: 80 },
  { subject: 'English', performance: 92, target: 80 },
  { subject: 'History', performance: 74, target: 80 },
  { subject: 'Arts', performance: 88, target: 80 }
];

export const ATTENDANCE_DATA = [
  { name: 'Present', value: 92, color: '#6366f1' },
  { name: 'Absent', value: 5, color: '#f43f5e' },
  { name: 'Late', value: 3, color: '#f59e0b' }
];
