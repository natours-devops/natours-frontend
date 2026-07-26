import api from '../../../lib/axios';

export const login = (data) => api.post('/users/login', data);
export const signup = (data) => api.post('/users/signup', data);
export const forgotPassword = (data) => api.post('/users/forgotPassword', data);
export const resetPassword = (token, data) => api.patch(`/users/resetPassword/${token}`, data);
export const getMe = () => api.get('/users/me');
export const logout = () => api.get('/users/logout');
