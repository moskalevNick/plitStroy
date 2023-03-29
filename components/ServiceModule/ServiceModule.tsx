import React from 'react';

import {
  StyledContainer,
  StyledWrapper,
  StyledHeader,
  StyledText,
} from './StyledServiceModule';

const ServiceModule: React.FC = () => {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledHeader>
          Предприятие ООО &quot;Плит-строй&quot; осуществляет производство
          тротуарной плитки из бетона и сухих смесей
        </StyledHeader>
        <StyledText textAlign='center'>
          Выбирая нашу компанию Вы получаете готовое комплексное решение с
          полным спектром услуг
        </StyledText>
      </StyledWrapper>

      <StyledWrapper>
        <StyledHeader>Мы предлагаем Вам:</StyledHeader>
        <StyledText>
          <p>- Помощь при выборе тротуарной плитки</p>
          <p>- Организацию доставки</p>
          <p>
            Наши бетонные тротуарные плиты долговечны (выдерживают большие
            механические нагрузки), устойчивы к атмосферным явлениям (перепадам
            температур, осадкам и т. д.), экологичными (используются только
            натуральные материалы, поэтому отсутствуют вредные испарения)
          </p>
          <p>Технические требования:</p>
          <p>- Класс бетона по прочности на сжатие В35.</p>
          <p>- Истираемость – не более 0,7 г/см².</p>
          <p>- Марка бетона по морозостойкости – F 250.</p>
          <p>- Марка бетона по водопоглощению – не более 5 %.</p>
          <p>
            Спокойная прогулка по любимой дороге. Нечёткие контуры плитки радуют
            глаз и успокаивают ход мыслей, кажется, что дорога движется вместе с
            Вами. Вид дорожки напоминает песчаный берег реки, где всегда тихо и
            спокойно. Неровная поверхность плитки обеспечивает отличное
            сцепление и предотвращает скольжение, а различная цветовая гамма
            позволяет создать уникальный дизайн Ваших дорожек и площадей.
          </p>
        </StyledText>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default ServiceModule;
