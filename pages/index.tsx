import type { NextPage } from 'next';
import HalfPicture from '../components/HalfPictureModule/HalfPictureModule';
import Price from '../components/Price/Price';
import ProductsCarousel from '../components/ProductsCarousel/ProductsCarousel';
import TitleBlock from '../components/TitleBlock/TitleBlock';

const Home: NextPage = () => {
  return (
    <>
      <TitleBlock />
      <ProductsCarousel />
      <Price />
      <HalfPicture src='/img/background_feedback.webp' />
    </>
  );
};

export default Home;
