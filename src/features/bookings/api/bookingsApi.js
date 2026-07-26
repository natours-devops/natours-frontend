import api from '../../../lib/axios';

export const getMyBookings = () =>
  api.get('/bookings/my-bookings').then((res) => res.data.data.data);

export const confirmBooking = (data) =>
  api.post('/bookings/confirm', data).then((res) => res.data.data.booking);
