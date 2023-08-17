import { Navigate, useRoutes, Outlet } from 'react-router-dom';
// auth
import AuthGuard from '../components/AuthGuard';
import { 
  LoginPage,
  Homepage,
  ChangeDocument
} from './elements';
// layout
import Layout from '../layouts/main/Layout';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: (
          <AuthGuard>
            <Layout>
              {/* Outlet will render the matched child route */}
              <Outlet /> 
            </Layout>
          </AuthGuard>
      ),      
      children: [
        { path: '/', element: <Homepage /> },  // moved Homepage here
        { path: 'login', element: <LoginPage /> },
        // customers
        {
          path: 'customers',
          children: [
            { path: 'new', element: <ChangeDocument docType={'customers'} templateId={'new'} /> },
            { path: 'edit/:id', element: <ChangeDocument docType={'customers'} templateId={'edit'} /> }
          ]
        },
        // data models
        {
          path: 'data-models',
          children: [
            { path: 'new', element: <ChangeDocument docType={'data-models'} templateId={'new'}  /> },
            { path: 'edit/:id', element: <ChangeDocument docType={'data-models'} templateId={'edit'}  /> }
          ]
        },
        // dashboard configs
        {
          path: 'dashboards',
          children: [
            { path: 'new', element: <ChangeDocument docType={'dashboards'} templateId={'new'}  /> },
            { path: 'edit/:id', element: <ChangeDocument docType={'dashboards'} templateId={'edit'}  /> }
          ]
        }
      ],
    },
    { 
      path: '*', 
      element: <Navigate to="/404" replace /> 
    },
  ]);
}
