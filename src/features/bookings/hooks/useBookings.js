import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { confirmBooking, getMyBookings } from '../api/bookingsApi';

export function useMyBookings() {
  return useQuery({
    queryKey: ['my-bookings'],
    queryFn: getMyBookings,
    staleTime: 0,
  });
}

export function useConfirmBooking() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: confirmBooking,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['my-bookings'] });
    },
    onError: (err) => toast.error(err.message),
  });
}
