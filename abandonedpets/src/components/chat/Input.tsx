import styled from "styled-components";
import UpArrow from "../../assets/UpArrow.png";

const InputContainer = styled.div`
  width: 45rem;
  height: 3rem;
  border-radius: 10px;
  border: 1px solid #252525;
  margin: 1rem 0;
  position: relative;
  display: flex;
  align-items: center;
`

const InputText = styled.input`
  width: 90%;
  height: 1.5rem;
  border: none;
  outline: none;
  color: #000;
  font-size: 1rem;
  padding: 1%;
  margin-left: 0.3rem;
`

const SendImg = styled.img`
  position: absolute;
  right: 2%;
  background-color: #FFDADA;
  border-radius: 25px;

  &:hover{
    cursor: pointer;
  }
`


function Input() {
    return (
        <InputContainer>
            <InputText placeholder="메세지 입력" />
            <SendImg src={UpArrow} alt="전송" />
        </InputContainer>
    )
}

export default Input;