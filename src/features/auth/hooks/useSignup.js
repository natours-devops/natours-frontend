import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { signup } from '../api/authApi';
import { useAuth } from '../../../context/AuthContext';

export function useSignup() {
  const { login: setUser } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: signup,
    onSuccess: (res) => {
      setUser(res.data.data.user);
      toast.success('Account created successfully!');
      navigate('/');
    },
    onError: (err) => toast.error(err.message),
  });
}
