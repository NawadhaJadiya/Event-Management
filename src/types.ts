export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl: string;
  registrationDeadline: string;
  organizer: string;
  status: 'upcoming' | 'ongoing' | 'past';
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

export interface FormField {
  id: string;
  type: 'text' | 'email' | 'number' | 'select' | 'date';
  label: string;
  required: boolean;
  options?: string[];
}