import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateMe } from '../api/accountApi';
import { useAuth } from '../../../context/AuthContext';

export function useUpdateMe() {
  const { login: setUser } = useAuth();

  return useMutation({
    mutationFn: updateMe,
    onSuccess: (user) => {
      setUser(user);
      toast.success('Profile updated successfully!');
    },
    onError: (err) => toast.error(err.message),
  });
}
