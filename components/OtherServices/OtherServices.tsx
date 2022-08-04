import React from 'react';
import {
  StyledContainer,
  StyledHeader,
  StyledWrapperCards,
  StyledCard,
  StyledCardHeader,
  StyledCardImg,
  StyledWrapperImage,
} from './StyledOtherServices';

type serviceType = {
  id: number;
  name: string;
  imgPath: string;
};

const Services: serviceType[] = [
  { id: 1, name: 'Грузоперевозки', imgPath: '/img/services/delivery.webp' },
  {
    id: 2,
    name: 'Аренда манипулятора',
    imgPath: '/img/services/manipulator.webp',
  },
  { id: 3, name: 'Доставка песка', imgPath: '/img/services/dust.webp' },
  { id: 4, name: 'Аренда прицепа', imgPath: '/img/services/trailers.webp' },
  {
    id: 5,
    name: 'Укладка тротуарной плитки',
    imgPath: '/img/services/service.webp',
  },
];

const OtherServices: React.FC = () => {
  return (
    <StyledContainer>
      <StyledHeader>Также оказываем следующие услуги:</StyledHeader>
      <StyledWrapperCards>
        {Services.map((service) => (
          <StyledCard key={service.id}>
            <StyledCardHeader>{service.name}</StyledCardHeader>
            <StyledWrapperImage>
              <StyledCardImg src={service.imgPath} />
            </StyledWrapperImage>
          </StyledCard>
        ))}
      </StyledWrapperCards>
    </StyledContainer>
  );
};

export default OtherServices;
