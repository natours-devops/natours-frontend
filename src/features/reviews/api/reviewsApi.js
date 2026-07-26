import api from '../../../lib/axios';

export const createReview = ({ tourId, data }) =>
  api.post(`/tours/${tourId}/reviews`, data).then((res) => res.data.data.data);

export const updateReview = ({ reviewId, data }) =>
  api.patch(`/reviews/${reviewId}`, data).then((res) => res.data.data.data);

export const deleteReview = (reviewId) =>
  api.delete(`/reviews/${reviewId}`);

export const getMyReviews = () =>
  api.get('/reviews?fields=review,rating,tour').then((res) => res.data.data.data);
