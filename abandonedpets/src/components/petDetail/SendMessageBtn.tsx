import styled from 'styled-components';
import Send from '../../assets/Send.png';

const Wrapper = styled.div`
  width: 55%;
  margin: 0 auto;
  display: flex;
  justify-content: end;
  position: relative;
`;

const SendBtn = styled.button`
  width: 45%;
  height: 2.3rem;
  background-color: #ffe7ce;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 700;

  &: hover {
    cursor: pointer;
    background-color: #ffdab9;
  }
`;

const SendIng = styled.img`
  width: 1rem;
  height: 1rem;
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translate(0%, -50%);
`;

function SendMessageBtn() {
  return (
    <Wrapper>
      <SendBtn type="button">메세지 보내기</SendBtn>
      <SendIng src={Send} alt="전송이미지" />
    </Wrapper>
  );
}

export default SendMessageBtn;
