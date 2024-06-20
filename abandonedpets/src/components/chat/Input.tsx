import styled from 'styled-components';
import Button from '@mui/material/Button';
import { useState } from 'react';
import UpArrow from '../../assets/UpArrow.png';

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const InputText = styled.input`
  width: 100%;
  border: none;
  outline: none;
  color: #000;
  font-size: 1rem;
  padding: 0.25rem;
  border: 1px solid #9da8b7;
  border-radius: 5px;
  box-sizing: border-box; // input의 길이가 부모 요소의 밖으로 나가는 것을 방지

  &: hover {
    border-color: #3399ff;
  }

  &: focus {
    border-color: #3399ff;
    box-shadow: 0 0 0 3px #b6daff;
  }
`;

const SendImg = styled.img`
  position: absolute;
  right: 2%;
  background-color: #ffdada;
  border-radius: 25px;

  &:hover {
    cursor: pointer;
  }
`;

const Input = ({ sendMessage }) => {
  const [message, setMessage] = useState('');

  const inputHandler = (e) => {
    setMessage(e.target.value);
  };

  const sendHandler = () => {
    sendMessage(message);
    setMessage('');
  };

  const enterHandler = (e) => {
    if (e.key === 'Enter') sendHandler();
  };

  return (
    <InputContainer>
      <InputText
        onChange={inputHandler}
        value={message}
        placeholder="메세지 입력"
        onKeyDown={enterHandler}
      />
      <Button onClick={sendHandler} variant="outlined" size="small">
        전송
      </Button>
    </InputContainer>
  );
};

export default Input;
