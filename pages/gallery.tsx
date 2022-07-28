import type { NextPage } from 'next';
import GalleryModule from '../components/GalleryModule/GalleryModule';
import ButtonScrollToTop from '../components/ReusableComponents/ButtonScrollToTop/ButtonScrollToTop';

const Gallery: NextPage = () => {
  return (
    <>
      <GalleryModule />
      <ButtonScrollToTop />
    </>
  );
};

export default Gallery;
