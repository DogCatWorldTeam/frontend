import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

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
  width: 18rem;
  display: flex;
  flex-direction: column;
  margin-top: 3%;
  gap: 20px;
`;

/*
const SubmitBtn = styled.span`
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
*/

const LoginContainer = styled.div`
  width: 18rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5%;
`;

const LoginExplan = styled.p`
  font-size: 0.875rem;
  color: #939393;
`;

const LoginText = styled(Link)`
  font-size: 0.875rem;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;

function RegisterForm() {
  return (
    <SignUpContainer>
      <Explan>회원가입</Explan>
      <FormContainer>
        <TextField variant="standard" label="이름" />
        <TextField variant="standard" label="이메일" />
        <TextField variant="standard" label="비밀번호" type="password" />
        <TextField
          variant="standard"
          label="전화번호"
          placeholder="01012345678"
        />
        <Button variant="contained" color="warning" size="large">
          회원가입
        </Button>
      </FormContainer>
      <LoginContainer>
        <LoginExplan>이미 회원이신가요?</LoginExplan>
        <LoginText to="/login">로그인하기</LoginText>
      </LoginContainer>
    </SignUpContainer>
  );
}

export default RegisterForm;
