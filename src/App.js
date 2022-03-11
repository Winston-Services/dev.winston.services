import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import NoMatch from './pages/NoMatch';
import { CircularProgress } from '@mui/material';

const Dashboard = React.lazy(() => import('./pages/Dashboard'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route
          path="dashboard"
          element={
            <React.Suspense fallback={<CircularProgress />}>
              <Dashboard />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}
