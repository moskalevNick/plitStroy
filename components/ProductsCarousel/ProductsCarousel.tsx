import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { Scrollbar, Navigation, Mousewheel, Autoplay } from 'swiper';

import {
  StyledContainer,
  StyledCard,
  StyledProductName,
  StyledProductWrapperImage,
  StyledProductImage,
  StyledProductDescription,
  StyledProductPrice,
  StyledProductColored,
} from './StyledProductsCarousel';
import { useIsMediaQuery } from '../../utils/hooks/isMediaQuery';
import theme from '../../utils/styledTheme';

type productType = {
  id: string;
  name: string;
  price: number;
  imgPath: string;
  colored: boolean;
};

const products: productType[] = [
  {
    id: '1',
    name: 'Плитка тротуарная "Тактильная" К 30*30*3',
    price: 18,
    imgPath: '/img/products/product_1.jpg',
    colored: false,
  },
  {
    id: '2',
    name: 'Плитка тротуарная "Тактильная" К 40*40*5',
    price: 30,
    imgPath: '/img/products/product_2.jpg',
    colored: false,
  },
  {
    id: '3',
    name: 'Плитка тротуарная "Тактильная" К 50*50*5 МЦ',
    price: 30,
    imgPath: '/img/products/product_3_4.jpg',
    colored: false,
  },
  {
    id: '4',
    name: 'Плитка тротуарная "Тактильная" К 40*40*8 МЦ',
    price: 48,
    imgPath: '/img/products/product_3_4.jpg',
    colored: false,
  },
  {
    id: '5',
    name: 'Плитка тротуарная "Черепашка" К 30*30*3',
    price: 15,
    imgPath: '/img/products/product_5.jpg',
    colored: true,
  },
  {
    id: '6',
    name: 'Плитка тротуарная "Калифорния" К 30*30*3',
    price: 15,
    imgPath: '/img/products/product_6.jpg',
    colored: true,
  },
  {
    id: '7',
    name: 'Плитка тротуарная "Краков" К 30*30*3',
    price: 15,
    imgPath: '/img/products/product_7.jpg',
    colored: true,
  },
  {
    id: '8',
    name: 'Плитка тротуарная "Осень" К 30*30*3',
    price: 15,
    imgPath: '/img/products/product_8.jpg',
    colored: true,
  },
  {
    id: '9',
    name: 'Плитка тротуарная "Гладкая" К 30*30*3',
    price: 15,
    imgPath: '/img/products/product_9.jpg',
    colored: true,
  },
  {
    id: '10',
    name: 'Плитка тротуарная "Волна" К 30*30*3',
    price: 15,
    imgPath: '/img/products/product_10.jpg',
    colored: true,
  },
  {
    id: '11',
    name: 'Плитка тротуарная "Паркет" К 30*30*3',
    price: 15,
    imgPath: '/img/products/product_11.jpg',
    colored: true,
  },
  {
    id: '12',
    name: 'Плитка тротуарная "Мостовая" К 29*29*3',
    price: 15,
    imgPath: '/img/products/product_12.jpg',
    colored: true,
  },
  {
    id: '13',
    name: 'Плитка тротуарная "Галька" К 35*35*3',
    price: 15,
    imgPath: '/img/products/product_13.jpg',
    colored: true,
  },
  {
    id: '14',
    name: 'Плитка тротуарная "Волна" К 35*35*5',
    price: 18,
    imgPath: '/img/products/product_14.jpg',
    colored: true,
  },
  {
    id: '15',
    name: 'Плитка тротуарная "Паутинка" К 35*35*4,8',
    price: 18,
    imgPath: '/img/products/product_15.jpg',
    colored: true,
  },
  {
    id: '16',
    name: 'Плитка тротуарная "Циновка" К 40*40*3',
    price: 16,
    imgPath: '/img/products/product_16.jpg',
    colored: true,
  },
  {
    id: '17',
    name: 'Плитка тротуарная "Гладкая" К 40*40*5',
    price: 18,
    imgPath: '/img/products/product_17.jpg',
    colored: true,
  },
  {
    id: '18',
    name: 'Плитка тротуарная "Квадрат" К 40*40*5',
    price: 18,
    imgPath: '/img/products/product_18.jpg',
    colored: true,
  },
  {
    id: '19',
    name: 'Плитка тротуарная "Старый камень" К 45*45*5',
    price: 18,
    imgPath: '/img/products/product_19.jpg',
    colored: true,
  },
  {
    id: '20',
    name: 'Плитка тротуарная "Квадрат" К 50*50*5',
    price: 18,
    imgPath: '/img/products/product_20.jpg',
    colored: true,
  },
  {
    id: '21',
    name: 'Плитка тротуарная "Арбат',
    price: 18,
    imgPath: '/img/products/product_21.jpg',
    colored: true,
  },
  {
    id: '22',
    name: 'Плитка тротуарная "Булыжная мостовая" П 30*15*4',
    price: 18,
    imgPath: '/img/products/product_22.jpg',
    colored: true,
  },
  {
    id: '23',
    name: 'Плитка тротуарная "Средневековая" П 26*16,5*6',
    price: 18,
    imgPath: '/img/products/product_23.jpg',
    colored: true,
  },
  {
    id: '24',
    name: 'Плитка тротуарная "Брук колотый" П 25*12,5*6',
    price: 18,
    imgPath: '/img/products/product_24.jpg',
    colored: true,
  },
  {
    id: '25',
    name: 'Плитка тротуарная "Доска паркетная" П 79*19,5*4',
    price: 18,
    imgPath: '/img/products/product_25.jpg',
    colored: true,
  },
  {
    id: '26',
    name: 'Плитка тротуарная " Клевер Краковский" Ф',
    price: 18,
    imgPath: '/img/products/product_26.jpg',
    colored: false,
  },
  {
    id: '27',
    name: 'Плитка тротуарная "Каштан" Ф',
    price: 18,
    imgPath: '/img/products/product_27.jpg',
    colored: true,
  },
  {
    id: '28',
    name: 'Плитка тротуарная "Клевер узорчатый" Ф',
    price: 18,
    imgPath: '/img/products/product_28.jpg',
    colored: false,
  },
  {
    id: '29',
    name: 'Плитка тротуарная "Бикини" Ф',
    price: 15,
    imgPath: '/img/products/product_29.jpg',
    colored: true,
  },
  {
    id: '30',
    name: 'Плитка тротуарная "Кирпичик" П20.10.6 М-а',
    price: 17.5,
    imgPath: '/img/products/product_30.jpg',
    colored: true,
  },
  {
    id: '31',
    name: 'Плитка тротуарная "Кирпичик" П 20*10*8',
    price: 21,
    imgPath: '/img/products/product_31.jpg',
    colored: true,
  },
  {
    id: '32',
    name: 'Плитка тротуарная "Старый город" 6',
    price: 17,
    imgPath: '/img/products/product_32.jpg',
    colored: true,
  },
  {
    id: '33',
    name: 'Плитка тротуарная "Старый город" 4',
    price: 14.6,
    imgPath: '/img/products/product_33.jpg',
    colored: true,
  },
  {
    id: '34',
    name: 'Плитка тротуарная "Ландхаус"',
    price: 17,
    imgPath: '/img/products/product_34.jpg',
    colored: false,
  },
  {
    id: '35',
    name: 'Плитка тротуарная "Ландхаус" МЦ',
    price: 30,
    imgPath: '/img/products/product_35.jpg',
    colored: false,
  },
  {
    id: '36',
    name: 'Плитка тротуарная "Ландхаус" МЦ',
    price: 30,
    imgPath: '/img/products/product_36.jpg',
    colored: false,
  },
  {
    id: '37',
    name: 'Плитка тротуарная "Ландхаус" МЦ',
    price: 30,
    imgPath: '/img/products/product_37.jpg',
    colored: false,
  },
  {
    id: '38',
    name: 'Плитка тротуарная "Ландхаус" МЦ',
    price: 30,
    imgPath: '/img/products/product_38.jpg',
    colored: false,
  },
  {
    id: '39',
    name: 'Плитка тротуарная "Ландхаус" МЦ',
    price: 30,
    imgPath: '/img/products/product_39.jpg',
    colored: false,
  },
  {
    id: '40',
    name: 'Плитка тротуарная "Ландхаус" МЦ',
    price: 30,
    imgPath: '/img/products/product_40.jpg',
    colored: false,
  },
  {
    id: '41',
    name: 'Плитка тротуарная "Ландхаус" МЦ',
    price: 30,
    imgPath: '/img/products/product_41.jpg',
    colored: false,
  },
  {
    id: '42',
    name: 'Камень бортовой БР 100.30.15',
    price: 13.8,
    imgPath: '/img/products/product_42.jpg',
    colored: false,
  },
  {
    id: '44',
    name: 'Камень бортовой БРТ 100.22.7,5',
    price: 7.5,
    imgPath: '/img/products/product_44.jpg',
    colored: true,
  },
  {
    id: '45',
    name: 'Камень бортовой БРТ 100.20.5',
    price: 5.5,
    imgPath: '/img/products/product_45.jpg',
    colored: true,
  },
  {
    id: '46',
    name: 'Камень бортовой БРТ 50.20.5',
    price: 4.5,
    imgPath: '/img/products/product_46.jpg',
    colored: true,
  },
  {
    id: '47',
    name: 'Камень бортовой БРТ 50.20.3,5',
    price: 3,
    imgPath: '/img/products/product_47.jpg',
    colored: true,
  },
  {
    id: '48',
    name: 'Желоб водосточный 50.16.5',
    price: 3,
    imgPath: '/img/products/product_48.jpg',
    colored: true,
  },
  {
    id: '49',
    name: 'Желоб водосточный 35.25.8',
    price: 4,
    imgPath: '/img/products/product_49.jpg',
    colored: true,
  },
];

const ProductsCarousel: React.FC = () => {
  const isMaximum = useIsMediaQuery(theme.breakpoints.maximum);
  const isDesktop = useIsMediaQuery(theme.breakpoints.desktop);
  const isTablet = useIsMediaQuery(theme.breakpoints.tablet);
  const isMobile = useIsMediaQuery(theme.breakpoints.mobile);
  return (
    <StyledContainer>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        mousewheel={true}
        slidesPerView={isMaximum ? 4 : isDesktop ? 3 : isTablet ? 2 : 1}
        slidesPerGroup={isMobile ? 1 : 2}
        grabCursor={true}
        modules={[Navigation, Scrollbar, Mousewheel, Autoplay]}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <StyledCard>
              <StyledProductName>{product.name}</StyledProductName>
              <StyledProductWrapperImage>
                <StyledProductImage
                  alt={`photo of product_${product.id}`}
                  src={product.imgPath}
                />
              </StyledProductWrapperImage>
              <StyledProductDescription>
                <StyledProductPrice>{`${product.price} руб (без НДС)`}</StyledProductPrice>
                {product.colored && (
                  <StyledProductColored>Цветная +40%</StyledProductColored>
                )}
              </StyledProductDescription>
            </StyledCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledContainer>
  );
};

export default ProductsCarousel;
