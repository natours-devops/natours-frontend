import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Spinner from '../components/Spinner/Spinner';

import LoginPage from '../features/auth/pages/LoginPage';
import SignupPage from '../features/auth/pages/SignupPage';
import ForgotPasswordPage from '../features/auth/pages/ForgotPasswordPage';
import ResetPasswordPage from '../features/auth/pages/ResetPasswordPage';
import OverviewPage from '../features/tours/pages/OverviewPage';
import TourDetailPage from '../features/tours/pages/TourDetailPage';
import AccountPage from '../features/account/pages/AccountPage';
import MyBookingsPage from '../features/bookings/pages/MyBookingsPage';
import CheckoutSuccessPage from '../features/bookings/pages/CheckoutSuccessPage';
import NotFoundPage from '../pages/NotFoundPage';

function ProtectedRoute() {
  const { user, isLoading } = useAuth();
  if (isLoading) return <Spinner fullPage />;
  return user ? <Outlet /> : <Navigate to="/login" replace />;
}

const router = createBrowserRouter([
  { path: '/', element: <OverviewPage /> },
  { path: '/tour/:slug', element: <TourDetailPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignupPage /> },
  { path: '/forgot-password', element: <ForgotPasswordPage /> },
  { path: '/reset-password/:token', element: <ResetPasswordPage /> },
  { path: '/checkout-success', element: <CheckoutSuccessPage /> },
  {
    element: <ProtectedRoute />,
    children: [
      { path: '/me', element: <AccountPage /> },
      { path: '/my-tours', element: <MyBookingsPage /> },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
]);

export default router;
