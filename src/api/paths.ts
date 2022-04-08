import { ApiConfigItem } from './interfaces';

export const ApiConfig: { [key: string]: ApiConfigItem } = {
  getSchedule: {
    url: '/schedule',
    json: '/json/crm_calendar.json',
  },
  test: {
    url: '/api',
  },
  bookingRoom: {
    url: '/api/orders',
    json: '/json/booking_result.json',
  },
  callback: {
    url: '/api/callback',
  },
  allOrders: {
    url: '/api/orders',
    json: '/json/all_orders.json',
  },
  allClients: {
    url: '/api/clients',
    json: '/json/clients.json',
  },
  allRooms: {
    url: '/api/rooms',
    json: '/json/all_rooms.json',
  },
  login: {
    url: '/api/auth/login',
    json: '/json/login.json',
  },
  logout: {
    url: '/api/auth/logout',
    json: '/json/success.json',
    method: 'DELETE',
  },
  user: {
    url: '/api/users',
    json: '/json/user.json',
  },
};
