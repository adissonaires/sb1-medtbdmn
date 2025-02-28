import { Redirect } from 'expo-router';
import { useAuth } from '../context/auth';

export default function Index() {
  const { user } = useAuth();

  if (!user) {
    return <Redirect href="/sign-in" />;
  }

  // Redirect based on user role
  switch (user.role) {
    case 'admin':
      return <Redirect href="/dashboard" />;
    case 'client':
      return <Redirect href="/services" />;
    case 'employee':
      return <Redirect href="/tasks" />;
    default:
      return <Redirect href="/sign-in" />;
  }
}