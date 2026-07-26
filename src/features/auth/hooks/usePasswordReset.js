import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { forgotPassword, resetPassword } from '../api/authApi';
import { useAuth } from '../../../context/AuthContext';

export function useForgotPassword() {
  return useMutation({
    mutationFn: forgotPassword,
    onSuccess: () =>
      toast.success('Reset link sent! Check your email.'),
    onError: (err) => toast.error(err.message),
  });
}

export function useResetPassword() {
  const { login: setUser } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ token, data }) => resetPassword(token, data),
    onSuccess: (res) => {
      setUser(res.data.data.user);
      toast.success('Password reset successfully!');
      navigate('/');
    },
    onError: (err) => toast.error(err.message),
  });
}
