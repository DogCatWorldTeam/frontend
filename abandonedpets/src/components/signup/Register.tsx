import styled from 'styled-components';

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
`;

const Explan = styled.div`
  font-size: 2rem;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 3%;
`;

const Input = styled.input`
  width: 18rem;
  height: 3.5rem;
  font-size: 1rem;
  color: #000;
  border: none;
  border-bottom: 1px solid #8f8f8f;
  outline: none;
  padding: 2%;
  margin-top: 2%;
`;

const Button = styled.button`
  width: 18rem;
  height: 2.5rem;
  background-color: #ffdfbf;
  font-size: 1rem;
  border: none;
  border-radius: 70px;
  margin-top: 10%;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
`;

const LoginContainer = styled.div`
  width: 18rem;
  display: flex;
  justify-content: space-between;
  margin-top: 1.5%;
`;

const LoginExplan = styled.p`
  font-size: 0.875rem;
  color: #939393;
`;

const LoginText = styled.p`
  font-size: 0.875rem;
  cursor: pointer;
`;

function Register() {
  return (
    <SignUpContainer>
      <Explan>회원가입</Explan>
      <FormContainer>
        <Input type="text" placeholder="이름" />
        <Input type="email" placeholder="이메일" />
        <Input type="password" placeholder="비밀번호" />
        <Input type="number" placeholder="전화번호" />
        <Button>회원가입</Button>
      </FormContainer>
      <LoginContainer>
        <LoginExplan>이미 회원이신가요?</LoginExplan>
        <LoginText>회원가입</LoginText>
      </LoginContainer>
    </SignUpContainer>
  );
}

export default Register;
