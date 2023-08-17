import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Router from './routes';
import { AuthContextProvider } from './contexts/AuthContext';
import { GlobalStateProvider } from './zustand-stores/GlobalStateProvider';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <AuthContextProvider>
      <GlobalStateProvider>
        <HelmetProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </HelmetProvider>
      </GlobalStateProvider>
    </AuthContextProvider>
  );
};