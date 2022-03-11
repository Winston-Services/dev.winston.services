import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import NoMatch from './pages/NoMatch';
import { CircularProgress } from '@mui/material';

const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Counter = React.lazy(() => import('./pages/Counter'));
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<CircularProgress />}>
              <Dashboard />
            </React.Suspense>
          }
        />
        <Route
          path="/counter"
          element={
            <React.Suspense fallback={<CircularProgress />}>
              <Counter />
            </React.Suspense>
          }
        />
        <Route
          path="/home"
          element={
            <React.Suspense fallback={<CircularProgress />}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <React.Suspense fallback={<CircularProgress />}>
              <About />
            </React.Suspense>
          }
        />

        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}
