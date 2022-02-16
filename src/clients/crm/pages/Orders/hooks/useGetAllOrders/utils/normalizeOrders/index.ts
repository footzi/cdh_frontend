import { RENDER_ORDER } from 'crm/pages/Orders/interfaces';
import { Order, Pet } from 'interfaces';
import { getDeclination, getDeclinationDays } from 'utils/declination';
import { formatPrice } from 'utils/formatPrice';
import { formatToFrontendDate } from 'utils/formatToFrontendDate';
import { getLocaleOrderStatus } from 'utils/getLocaleOrderStatus';
import { getLocalePetType } from 'utils/getLocalePetType';
import { getLocaleReproductionType } from 'utils/getLocaleReproductionType';

export const normalizePets = (pets: Pet[]): string => {
  let result = '';

  pets.forEach((pet) => {
    const ageLocale = getDeclination(pet.age, ['год', 'года', 'лет']);
    const special = pet.special ? `, ${pet.special}` : '';

    const comments = pet.comments ? `, (${pet.comments})` : '';

    const string = `${getLocalePetType(pet.type)} ${pet.name}, ${pet.age} ${ageLocale}, ${getLocaleReproductionType(
      pet.reproduction
    )}${special} ${comments}`;

    result = result + string;
  });
  return result;
};

export const normalizeOrders = (order: Order): RENDER_ORDER => {
  return {
    key: order.id,
    dates: `${formatToFrontendDate(order.startDate)} - ${formatToFrontendDate(order.endDate)} (${
      order.countDays
    } ${getDeclinationDays(order.countDays)})`,
    room: order.room,
    price: formatPrice(order.price),
    // status: getLocaleOrderStatus(order.status),
    status: order.status,
    pet: normalizePets(order.pets ?? []),
    name: order.client?.firstName,
    phone: order.client?.phone,
    email: order.client?.email,
  };
};
