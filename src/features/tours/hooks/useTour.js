import { useQuery } from '@tanstack/react-query';
import { getTourBySlug } from '../api/toursApi';

export function useTour(slug) {
  return useQuery({
    queryKey: ['tour', slug],
    queryFn: () => getTourBySlug(slug),
    enabled: !!slug,
  });
}
