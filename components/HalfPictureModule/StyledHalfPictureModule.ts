import styled from 'styled-components';

type halfPictureImgType = {
  src: string;
};

export const StyledHalfPictureWrapper = styled.section`
  background: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.white};
  padding: 0;
  border-top: 1px solid white;
  display: flex;
  justify-content: flex-start;
  text-align: center;
  flex-direction: column;
  ${({ theme }) => theme.media.desktop} {
    flex-direction: row;
  }
`;

export const StyledHalfPictureImg = styled.div<halfPictureImgType>`
  flex: 1;
  background: url(${({ src }) => src}) no-repeat;
  background-size: cover;
  display: flex;
  min-height: 50vh;
  ${({ theme }) => theme.media.desktop} {
    min-height: 40vh;
  }
`;
