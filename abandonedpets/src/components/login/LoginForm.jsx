import styled from 'styled-components';

const LoginContainer = styled.div`
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

const SignUpContainer = styled.div`
  width: 18rem;
  display: flex;
  justify-content: space-between;
  margin-top: 1.5%;
`;

const SignUpExplan = styled.p`
  font-size: 0.875rem;
  color: #939393;
`;

const SignUpText = styled.p`
  font-size: 0.875rem;
  cursor: pointer;
`;

function LoginForm() {
  return (
    <LoginContainer>
      <Explan>로그인</Explan>
      <FormContainer>
        <Input type="text" placeholder="이메일" />
        <Input type="password" placeholder="비밀번호" />
        <Button>로그인</Button>
      </FormContainer>
      <SignUpContainer>
        <SignUpExplan>아직 회원이 아니신가요?</SignUpExplan>
        <SignUpText>회원가입</SignUpText>
      </SignUpContainer>
    </LoginContainer>
  );
}

export default LoginForm;
