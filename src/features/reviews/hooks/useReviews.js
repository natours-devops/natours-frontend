import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createReview, deleteReview, updateReview } from '../api/reviewsApi';

export function useCreateReview(slug) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tour', slug] });
      toast.success('Review submitted!');
    },
    onError: (err) => toast.error(err.message),
  });
}

export function useUpdateReview(slug) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tour', slug] });
      toast.success('Review updated!');
    },
    onError: (err) => toast.error(err.message),
  });
}

export function useDeleteReview(slug) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tour', slug] });
      toast.success('Review deleted!');
    },
    onError: (err) => toast.error(err.message),
  });
}
