import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { login } from '../api/authApi';
import { useAuth } from '../../../context/AuthContext';

export function useLogin() {
  const { login: setUser } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      setUser(res.data.data.user);
      toast.success('Logged in successfully!');
      navigate('/');
    },
    onError: (err) => toast.error(err.message),
  });
}
