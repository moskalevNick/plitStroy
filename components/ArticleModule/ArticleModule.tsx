import React, { useEffect, useRef, useState } from 'react';
import { articleData } from './article.data';

import {
  StyledContainer,
  StyledArticle,
  StyledTitleArticle,
  StyledSubtitle,
  StyledText,
  StyledButtonWrapper,
  StyledShowMoreButton,
} from './StyledArticleModule';

const ArticleModule: React.FC = () => {
  const [active, setActive] = useState<number>(-1);
  const [selectedHeight, setSelectedHeight] = useState(0);
  const contentRefs = useRef<any>([]);

  useEffect(() => {
    if (contentRefs.current && active >= 0) {
      setSelectedHeight(contentRefs.current[active].scrollHeight);
    }
  }, [active, contentRefs.current]);

  return (
    <StyledContainer>
      {articleData.map((article, i) => (
        <div key={article.id}>
          <StyledArticle
            ref={(el) => (contentRefs.current[i] = el)}
            style={
              active === i && contentRefs.current.length
                ? { maxHeight: `${selectedHeight}px` }
                : { maxHeight: '410px' }
            }
          >
            <StyledTitleArticle>{article.title}</StyledTitleArticle>
            {article.subtitle?.length === article.text.length ? (
              article.subtitle?.map((subtitle, i) => (
                <div key={subtitle}>
                  <StyledSubtitle>{subtitle}</StyledSubtitle>
                  <StyledText>{article.text[i]}</StyledText>
                </div>
              ))
            ) : article.subtitle?.length === 1 ? (
              <>
                <StyledSubtitle>{article.subtitle}</StyledSubtitle>
                {article.text.map((text) => (
                  <StyledText key={text}>{text}</StyledText>
                ))}
              </>
            ) : (
              article.text.map((text) => (
                <StyledText key={text}>{text}</StyledText>
              ))
            )}
          </StyledArticle>
          {i !== 1 && (
            <StyledButtonWrapper>
              <StyledShowMoreButton
                onClick={() => setActive(i === active ? -1 : i)}
              >
                {active === i ? 'Свернуть' : 'Показать больше'}
              </StyledShowMoreButton>
            </StyledButtonWrapper>
          )}
        </div>
      ))}
    </StyledContainer>
  );
};

export default ArticleModule;
