import { useState, useEffect } from 'react';
// react-router-dom
import { useNavigate, useLocation } from 'react-router-dom';
// components
import CircularIndeterminate from './load-spinner';
//
import LoginPage from '../pages/LoginPage';
import { useAuthContext } from '../hooks/useAuthContext';

// ----------------------------------------------------------------------

type AuthGuardProps = {
  children: React.ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  const { user, authIsReady } = useAuthContext();

  const navigate = useNavigate();
  const location = useLocation();

  const [requestedLocation, setRequestedLocation] = useState<string | null>(null);

  useEffect(() => {
    if (requestedLocation && location.pathname !== requestedLocation) {
      navigate(requestedLocation);
    }
    if (user) {
      setRequestedLocation(null);
    }
  }, [user, location.pathname, navigate, requestedLocation]);

  if (!authIsReady) {
    return <CircularIndeterminate />;
  }

  if (!user) {
    if (location.pathname !== requestedLocation) {
      setRequestedLocation(location.pathname);
    }
    return <LoginPage />;
  }

  return <> {children} </>;
}
