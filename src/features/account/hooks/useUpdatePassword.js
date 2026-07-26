import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updatePassword } from '../api/accountApi';
import { useAuth } from '../../../context/AuthContext';

export function useUpdatePassword() {
  const { login: setUser } = useAuth();

  return useMutation({
    mutationFn: updatePassword,
    onSuccess: (user) => {
      setUser(user);
      toast.success('Password updated successfully!');
    },
    onError: (err) => toast.error(err.message),
  });
}
