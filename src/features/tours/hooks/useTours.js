import { useQuery } from '@tanstack/react-query';
import { getAllTours } from '../api/toursApi';

export function useTours() {
  return useQuery({
    queryKey: ['tours'],
    queryFn: getAllTours,
  });
}
