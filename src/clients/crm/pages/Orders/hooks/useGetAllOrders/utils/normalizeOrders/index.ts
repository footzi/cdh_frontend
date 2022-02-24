import { Order, Pet } from 'interfaces';
import { getDeclination, getDeclinationDays } from 'utils/declination';
import { formatPrice } from 'utils/formatPrice';
import { formatToFrontendDate } from 'utils/formatToFrontendDate';
import { getLocalePetType } from 'utils/getLocalePetType';
import { getLocaleReproductionType } from 'utils/getLocaleReproductionType';

import { RenderOrder } from '../../../../interfaces';

export const normalizePets = (pets: Pet[]): string => {
  let result = '';

  pets.forEach((pet) => {
    const ageLocale = getDeclination(pet.age, ['год', 'года', 'лет']);
    const special = pet.special ? `, ${pet.special}` : '';

    const comments = pet.comments ? `, (${pet.comments})` : '';

    const string = `${getLocalePetType(pet.type)} ${pet.name}, ${pet.age} ${ageLocale}, ${getLocaleReproductionType(
      pet.reproduction
    )}${special} ${comments} <br />`;

    result = result + string;
  });
  return result;
};

export const normalizeOrders = (order: Order): RenderOrder => {
  return {
    key: order.id,
    dates: `${formatToFrontendDate(order.startDate)} - ${formatToFrontendDate(order.endDate)}`,
    countDays: `${order.countDays} ${getDeclinationDays(order.countDays)}`,
    room: order.room.name,
    price: formatPrice(order.price),
    status: order.status,
    pets: normalizePets(order.pets),
    name: order.client?.firstName,
    phone: order.client?.phone,
    email: order.client?.email,
  };
};
