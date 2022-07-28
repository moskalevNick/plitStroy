import React, { useState } from 'react';

import {
  StyledContainer,
  StyledCard,
  StyledExampleImage,
  StyledDescription,
  StyledHeader,
} from './StyledGalleryModule';

type exampleType = {
  id: string;
  imgPath: string;
  description?: string;
};

const examples: exampleType[] = [
  {
    id: '1',
    imgPath: '/img/gallery/img2.jpg',
    description: 'тротуарная брусчатка',
  },
  {
    id: '2',
    imgPath: '/img/gallery/img3.jpg',
    description: 'клевер орнаментный',
  },
  {
    id: '3',
    imgPath: '/img/gallery/img4.jpg',
    description: 'ластрико черепашка',
  },
  {
    id: '4',
    imgPath: '/img/gallery/img5.jpg',
    description: 'клевер орнаментный',
  },
  {
    id: '5',
    imgPath: '/img/gallery/img6.jpg',
    description: 'брусчатка брук',
  },
  {
    id: '6',
    imgPath: '/img/gallery/img7.jpg',
    description: 'плитка тротуарная каштан',
  },
  {
    id: '7',
    imgPath: '/img/gallery/img8.jpg',
    description: 'плитка тротуарная каштан',
  },
  {
    id: '8',
    imgPath: '/img/gallery/img9.jpg',
    description: 'клевер декоративный',
  },
  {
    id: '9',
    imgPath: '/img/gallery/img10.jpg',
    description: 'клевер декоративный',
  },
  {
    id: '10',
    imgPath: '/img/gallery/img11.jpg',
    description: 'клевер декоративный',
  },
  {
    id: '11',
    imgPath: '/img/gallery/img12.jpg',
    description: 'клевер декоративный',
  },
  {
    id: '12',
    imgPath: '/img/gallery/img13.jpg',
    description: 'чешуя бикини медуза',
  },
  {
    id: '13',
    imgPath: '/img/gallery/img14.jpg',
    description: 'чешуя бикини медуза',
  },
  {
    id: '14',
    imgPath: '/img/gallery/img15.jpg',
    description: 'чешуя бикини медуза',
  },
  {
    id: '15',
    imgPath: '/img/gallery/img16.jpg',
    description: 'клевер орнаментный',
  },
  {
    id: '16',
    imgPath: '/img/gallery/img17.jpg',
    description: 'брусчатка брук арбат',
  },
  {
    id: '17',
    imgPath: '/img/gallery/img18.jpg',
    description: 'ластрико черепашка',
  },
  {
    id: '18',
    imgPath: '/img/gallery/img19.jpg',
    description: 'чешуя бикини медуза',
  },
  {
    id: '19',
    imgPath: '/img/gallery/img20.jpg',
    description: 'клевер декоративный',
  },
  {
    id: '20',
    imgPath: '/img/gallery/img21.jpg',
    description: 'ластрико черепашка',
  },
  {
    id: '21',
    imgPath: '/img/gallery/img22.jpg',
  },
  {
    id: '22',
    imgPath: '/img/gallery/img23.jpg',
  },
  {
    id: '23',
    imgPath: '/img/gallery/img24.jpg',
  },
  {
    id: '24',
    imgPath: '/img/gallery/img25.jpg',
    description: 'ластрико черепашка',
  },
  {
    id: '25',
    imgPath: '/img/gallery/img26.jpg',
  },
  {
    id: '26',
    imgPath: '/img/gallery/img27.jpg',
  },
  {
    id: '27',
    imgPath: '/img/gallery/img28.jpg',
  },
  {
    id: '28',
    imgPath: '/img/gallery/img29.jpg',
  },
  {
    id: '29',
    imgPath: '/img/gallery/img30.jpg',
  },
  {
    id: '30',
    imgPath: '/img/gallery/img31.jpg',
  },
  {
    id: '31',
    imgPath: '/img/gallery/img32.jpg',
  },
  {
    id: '32',
    imgPath: '/img/gallery/img33.jpg',
  },
  {
    id: '33',
    imgPath: '/img/gallery/img34.jpg',
  },
  {
    id: '34',
    imgPath: '/img/gallery/img35.jpg',
  },
  {
    id: '35',
    imgPath: '/img/gallery/img36.jpg',
  },
  {
    id: '36',
    imgPath: '/img/gallery/img37.jpg',
  },
  {
    id: '37',
    imgPath: '/img/gallery/img38.jpg',
  },
  {
    id: '38',
    imgPath: '/img/gallery/img39.jpg',
  },
  {
    id: '39',
    imgPath: '/img/gallery/img40.jpg',
  },
  {
    id: '40',
    imgPath: '/img/gallery/img41.jpg',
  },
  {
    id: '41',
    imgPath: '/img/gallery/img42.jpg',
  },
  {
    id: '42',
    imgPath: '/img/gallery/img43.jpg',
  },
  {
    id: '43',
    imgPath: '/img/gallery/img44.jpg',
  },
  {
    id: '44',
    imgPath: '/img/gallery/img45.jpg',
  },
  {
    id: '45',
    imgPath: '/img/gallery/img46.jpg',
  },
  {
    id: '46',
    imgPath: '/img/gallery/img47.jpg',
  },
  {
    id: '47',
    imgPath: '/img/gallery/img48.jpg',
  },
  {
    id: '48',
    imgPath: '/img/gallery/img49.jpg',
  },
  {
    id: '49',
    imgPath: '/img/gallery/img50.jpg',
  },
  {
    id: '50',
    imgPath: '/img/gallery/img51.jpg',
  },
  {
    id: '51',
    imgPath: '/img/gallery/img52.jpg',
  },
  {
    id: '52',
    imgPath: '/img/gallery/img53.jpg',
  },
  {
    id: '53',
    imgPath: '/img/gallery/img54.jpg',
  },
  {
    id: '54',
    imgPath: '/img/gallery/img55.jpg',
  },
  {
    id: '55',
    imgPath: '/img/gallery/img56.jpg',
    description: 'забор',
  },
  {
    id: '56',
    imgPath: '/img/gallery/img57.jpg',
    description: 'забор',
  },
  {
    id: '57',
    imgPath: '/img/gallery/img58.jpg',
    description: 'забор плетенка',
  },
  {
    id: '58',
    imgPath: '/img/gallery/img59.jpg',
    description: 'борт 1000х220х80',
  },
  {
    id: '59',
    imgPath: '/img/gallery/img60.jpg',
  },
  {
    id: '60',
    imgPath: '/img/gallery/img61.jpg',
  },
  {
    id: '61',
    imgPath: '/img/gallery/img62.jpg',
    description: 'блок рядовой «рваный камень»',
  },
  {
    id: '62',
    imgPath: '/img/gallery/img63.jpg',
    description: 'блок рядовой «рваный камень»',
  },
  {
    id: '63',
    imgPath: '/img/gallery/img64.jpg',
    description: 'блок рядовой «рваный камень»',
  },
  {
    id: '64',
    imgPath: '/img/gallery/img65.jpg',
    description: 'средневековой камень',
  },
  {
    id: '65',
    imgPath: '/img/gallery/img66.jpg',
    description: 'средневековой камень',
  },
  {
    id: '66',
    imgPath: '/img/gallery/img67.jpg',
    description: 'средневековой камень',
  },
  {
    id: '67',
    imgPath: '/img/gallery/img68.jpg',
  },
  {
    id: '68',
    imgPath: '/img/gallery/img69.jpg',
  },
  {
    id: '69',
    imgPath: '/img/gallery/img70.jpg',
  },
  {
    id: '70',
    imgPath: '/img/gallery/img71.jpg',
  },
  {
    id: '71',
    imgPath: '/img/gallery/img72.jpg',
  },
  {
    id: '72',
    imgPath: '/img/gallery/img107.jpg',
    description: 'арбат',
  },
  {
    id: '73',
    imgPath: '/img/gallery/img109.jpg',
    description: 'арбат',
  },
  {
    id: '74',
    imgPath: '/img/gallery/img110.jpg',
  },
  {
    id: '75',
    imgPath: '/img/gallery/img112.jpg',
  },
  {
    id: '76',
    imgPath: '/img/gallery/img113.jpg',
    description: 'урна',
  },
  {
    id: '77',
    imgPath: '/img/gallery/img114.jpg',
    description: 'новый город(листопад)',
  },
  {
    id: '78',
    imgPath: '/img/gallery/img115.jpg',
    description: 'новый город(травертин)',
  },
  {
    id: '79',
    imgPath: '/img/gallery/img116.jpg',
    description: 'новый город(клинкер)',
  },
  {
    id: '80',
    imgPath: '/img/gallery/img117.jpg',
    description: 'новый город(мрамор)',
  },
  {
    id: '81',
    imgPath: '/img/gallery/img119.jpg',
  },
  {
    id: '82',
    imgPath: '/img/gallery/img120.jpg',
  },
  {
    id: '83',
    imgPath: '/img/gallery/img121.jpg',
  },
];

const ProductsCarousel: React.FC = () => {
  return (
    <StyledContainer>
      <StyledHeader>Наша продукция:</StyledHeader>
      {examples.map((example) => (
        <StyledCard key={example.id}>
          <StyledExampleImage
            alt={`photo of product_${example.id}`}
            src={example.imgPath}
          />
          {example.description && (
            <StyledDescription>{example.description}</StyledDescription>
          )}
        </StyledCard>
      ))}
    </StyledContainer>
  );
};

export default ProductsCarousel;
