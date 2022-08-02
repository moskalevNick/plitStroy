import React from 'react';
import styled from 'styled-components';

type buttonStyleType = {
  invertColors?: boolean;
};

type ButtonProps = {
  label?: string;
  invertColors?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

const StyledWrapperButton = styled.div`
  margin: 0 auto;
  width: fit-content;
`;

const StyledButton = styled.button<buttonStyleType>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  color: #ffffff;
  min-height: 53px;
  padding: 10px 24px;
  margin: 20px auto;
  border: 0;
  outline: 0;
  cursor: pointer;
  overflow: hidden;
  background: ${({ invertColors }) => (invertColors ? '#50533f' : '#d1793e')};

  div {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0;
    background-color: ${({ invertColors }) =>
      invertColors ? '#d1793e' : '#50533f'};
    transition: all 0.3s;
  }

  :hover div {
    height: 100%;
  }

  :disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
    :hover div {
      height: 0%;
    }
  }
`;

const StyledButtonText = styled.span`
  position: relative;
  z-index: 10;
  font-size: 1rem;
  letter-spacing: 0.22em;
  color: #ffffff;
`;

const CustomButton: React.FC<ButtonProps> = ({
  label,
  invertColors = false,
  onClick,
  type = 'button',
  disabled = false,
}) => {
  return (
    <StyledWrapperButton onClick={onClick} role='button'>
      <StyledButton invertColors={invertColors} type={type} disabled={disabled}>
        <StyledButtonText>{label}</StyledButtonText>
        <div />
      </StyledButton>
    </StyledWrapperButton>
  );
};

export default CustomButton;
