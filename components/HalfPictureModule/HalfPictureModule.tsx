import React from 'react';
import FeedbackForm from '../ReusableComponents/FeedBackForm/FeedBackForm';
import {
  StyledHalfPictureWrapper,
  StyledHalfPictureImg,
} from './StyledHalfPictureModule';

type halfPictureType = {
  src: string;
};

const HalfPicture: React.FC<halfPictureType> = ({ src }) => {
  return (
    <StyledHalfPictureWrapper>
      <StyledHalfPictureImg src={src} />
      <FeedbackForm />
    </StyledHalfPictureWrapper>
  );
};

export default HalfPicture;
