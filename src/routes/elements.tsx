import { Suspense, lazy, ElementType } from 'react';
// components
import LoadingScreen from '../components/load-spinner';

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

export const LoginPage = Loadable(lazy(() => import('../pages/LoginPage')));
export const Homepage = Loadable(lazy(() => import('../pages/Homepage')));
export const ChangeDocument = Loadable(lazy(() => import('../pages/ChangeDocument')));
// export const Page404 = Loadable(lazy(() => import('../pages/Page404')));
