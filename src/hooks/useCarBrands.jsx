import { useMemo } from 'react';

export const useCarBrands = () => {
  const carBrands = useMemo(
    () =>
      [
        { value: 'buick', label: 'Buick' },
        { value: 'volvo', label: 'Volvo' },
        { value: 'hummer', label: 'HUMMER' },
        { value: 'subaru', label: 'Subaru' },
        { value: 'mitsubishi', label: 'Mitsubishi' },
        { value: 'nissan', label: 'Nissan' },
        { value: 'lincoln', label: 'Lincoln' },
        { value: 'gmc', label: 'GMC' },
        { value: 'hyundai', label: 'Hyundai' },
        { value: 'mini', label: 'MINI' },
        { value: 'bentley', label: 'Bentley' },
        { value: 'mercedes-Benz', label: 'Mercedes-Benz' },
        { value: 'aston martin', label: 'Aston Martin' },
        { value: 'pontiac', label: 'Pontiac' },
        { value: 'lamborghini', label: 'Lamborghini' },
        { value: 'audi', label: 'Audi' },
        { value: 'bmw', label: 'BMW' },
        { value: 'chevrolet', label: 'Chevrolet' },
        { value: 'chrysler', label: 'Chrysler' },
        { value: 'kia', label: 'Kia' },
        { value: 'land', label: 'Land' },
        { value: 'tesla', label: 'Tesla' },
        { value: 'porsche', label: 'Porsche' },
        { value: 'jaguar', label: 'Jaguar' },
        { value: 'lexus', label: 'Land' },
      ].sort((a, b) => a.label.localeCompare(b.label)),
    []
  );

  return carBrands;
};
