import React from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomPhoneInput from '../CustomPhoneInput/CustomPhoneInput';
import {
  StyledFeedbackForm,
  StyledSubtitleFeedback,
  StyledDescriptionFeedback,
  StyledPhone,
  StyledLogo,
} from './StyledFeedBackForm';

const FeedbackForm: React.FC = () => {
  const onSubmit = (phone: string) => {
    const templateParams = {
      phone: phone,
    };

    if (
      process.env.NEXT_PUBLIC_SERVICE_EMAIL_ID &&
      process.env.NEXT_PUBLIC_TEMPLATE_EMAIL_ID
    )
      emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE_EMAIL_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_EMAIL_ID,
          templateParams,
          process.env.NEXT_PUBLIC_EMAIL_KEY
        )
        .then(
          () => {
            toast.success('Ваша заявка зафиксирована', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          },
          () => {
            toast.error('Произошла ошибка', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        );
  };
  return (
    <StyledFeedbackForm>
      <ToastContainer />
      <StyledSubtitleFeedback>как приобрести продукцию?</StyledSubtitleFeedback>
      <StyledDescriptionFeedback>
        Вас заинтересовала наша продукция? Оставьте свой контактный номер
        телефона и мы решим логистический вопрос
      </StyledDescriptionFeedback>
      <CustomPhoneInput placeholderButton={'отправить'} onSubmit={onSubmit} />
      <StyledSubtitleFeedback>
        Либо можете связаться с нами
        <StyledPhone href='tel:+37529 652 38 99'>
          +375 (29) 652-38-99
        </StyledPhone>
        <StyledPhone href='mailto:plit-stroi@mail.ru'>
          Email: plit-stroi@mail.ru
        </StyledPhone>
        <StyledLogo />
      </StyledSubtitleFeedback>
    </StyledFeedbackForm>
  );
};

export default FeedbackForm;
