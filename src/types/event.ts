export interface Event {
  id: string; // Event's unique ID
  title: string;
  category: 'class' | 'work' | 'personal' | 'group_project' | 'others';
  startTime: string; // Stores as ISO 8601
  endTime: string;
  isRecurring?: boolean;
  daysOfWeek?: number[]; // 0~6, 0 for monday, 6 for sunday
}