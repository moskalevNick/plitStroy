import styled from 'styled-components';

export const StyledFeedbackWrapper = styled.section`
  position: relative;
  background: #50533f;
  color: #f8f2e8;
  padding: 0;
  display: flex;
  align-items: stretch;
  text-align: center;
  max-height: 598px;
`;

export const StyledWrapperFeedbackImg = styled.div`
  position: relative;
  overflow: hidden;
`;

export const StyledFeedbackForm = styled.div`
  display: flex;
  min-width: 40vw;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding-bottom: 30px;
  ${({ theme }) => theme.media.desktop} {
    margin-left: 100px;
    align-items: flex-start;
    text-align: left;
  }
`;

export const StyledSubtitleFeedback = styled.span`
  color: #d3c2ac;
  margin-bottom: 0px;
  padding-top: 60px;
  display: block;
  font-family: 'Brandon Grotesque', sans-serif;
  font-size: 0.7rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-weight: bold;
`;

export const StyledDescriptionFeedback = styled.h2`
  font-family: 'Brandon Grotesque', sans-serif;
  font-size: 28px;
  max-width: 430px;
  line-height: 1.3;
  font-size: calc(32px + 22 * ((20vw - 718px) / 692));
`;

export const StyledImg = styled.img`
  margin-left: 10px;
  width: 50px;
`;

export const StyledPhone = styled.a`
  font-size: 1.1rem;
  text-decoration: none;
  color: #f8f2e8;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  :hover {
    color: #d1793e;
  }

  ${({ theme }) => theme.media.desktop} {
    justify-content: left;
  }
`;