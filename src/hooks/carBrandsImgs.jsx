// car brands images
import audiImg from '../images/audi-img.png';
import chevroletImg from '../images/chevrolet-img.png';
import hyundaiImg from '../images/hyundai-img.png';
import lamboImg from '../images/lambo-img.png';
import landImg from '../images/land-img.png';
import miniImg from '../images/mini-img.png';
import mitsubishiImg from '../images/mitsubishi-img.png';
import porscheImg from '../images/porsche-img.png';
import subaruImg from '../images/subaru-img.png';
import mercedesImg from '../images/mercedes-img.png';
import { useMemo } from 'react';

export const useCarBrandsImgs = () => {
  const carBrandsImgs = useMemo(
    () => [
      { image: audiImg, alt: 'Audi brand' },
      { image: chevroletImg, alt: 'Chevrolet brand' },
      { image: hyundaiImg, alt: 'Hyundai brand' },
      { image: landImg, alt: 'Land Rover brand' },
      { image: miniImg, alt: 'MINI brand' },
      { image: mitsubishiImg, alt: 'Mitsubishi brand' },
      { image: porscheImg, alt: 'Porsche brand' },
      { image: subaruImg, alt: 'Subaru brand' },
      { image: mercedesImg, alt: 'Mercedes brand' },
      { image: lamboImg, alt: 'Lamborghini brand' },
    ],
    []
  );
  return carBrandsImgs;
};
