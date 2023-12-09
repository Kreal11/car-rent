import { useMemo } from 'react';

export const useRentPrices = () => {
  const minPrice = 10;
  const maxPrice = 500;

  const rentPrices = useMemo(() => {
    const prices = [];

    for (let i = minPrice; i <= maxPrice; i += 10) {
      prices.push({ value: i, label: `${i}$` });
    }

    return prices;
  }, []);

  return rentPrices;
};
