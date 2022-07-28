import type { NextPage } from 'next';
import ArticleModule from '../components/ArticleModule/ArticleModule';
import ButtonScrollToTop from '../components/ReusableComponents/ButtonScrollToTop/ButtonScrollToTop';

const Articles: NextPage = () => {
  return (
    <>
      <ArticleModule />
      <ButtonScrollToTop />
    </>
  );
};

export default Articles;
