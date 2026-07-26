import api from '../../../lib/axios';

export const getAllTours = () => api.get('/tours').then((res) => res.data.data.data);
export const getTourBySlug = (slug) => api.get(`/tours/slug/${slug}`).then((res) => res.data.data.data);
