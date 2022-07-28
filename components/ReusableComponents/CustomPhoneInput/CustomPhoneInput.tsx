import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';

import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

type inputProps = {
  placeholderInput?: string;
  placeholderButton?: string;
  onSubmit?: (e: string) => void;
};

const StyledWrapperPhoneInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  ${({ theme }) => theme.media.desktop} {
    justify-content: flex-start;
  }
`;

const StyledButton = styled.button`
  font-size: large;
  text-align: center;
  background: #e0b153;
  color: #ffffff;
  min-height: 53px;
  padding: 10px 24px;
  margin-top: 20px;
  border: 0;
  outline: 0;
  cursor: pointer;
  overflow: hidden;
  :disabled {
    background: #c46767;
    opacity: 0.5;
    cursor: no-drop;
  }
`;

const CustomPhoneInput: React.FC<inputProps> = ({
  placeholderButton,
  onSubmit,
}) => {
  const [inputValue, setInputValue] = useState('');
  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) onSubmit(`+${inputValue}`);
    setInputValue('+375');
  };

  return (
    <StyledWrapperPhoneInput>
      <form onSubmit={onSubmitForm} name='phoneInput'>
        <ReactPhoneInput
          country={'by'}
          value={inputValue}
          onChange={(e) => setInputValue(e)}
        />
        <StyledButton type='submit' disabled={inputValue.length < 12}>
          {placeholderButton}
        </StyledButton>
      </form>
    </StyledWrapperPhoneInput>
  );
};

export default CustomPhoneInput;
