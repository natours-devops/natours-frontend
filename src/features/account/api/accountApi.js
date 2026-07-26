import api from '../../../lib/axios';

export const updateMe = (formData) =>
  api.patch('/users/updateMe', formData).then((res) => res.data.data.user);

export const updatePassword = (data) =>
  api.patch('/users/updateMyPassword', data).then((res) => res.data.data.user);
