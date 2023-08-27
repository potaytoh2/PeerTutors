import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { removeAuthToken } from '@/utils/auth';

const LogoutPage = () => {
  const router = useRouter();

  useEffect(() => {
    removeAuthToken(); // Remove the authentication token
    router.push('/'); // Redirect to the home page
  }, []);

  return null; // No visual content, just redirection logic
};

export default LogoutPage;