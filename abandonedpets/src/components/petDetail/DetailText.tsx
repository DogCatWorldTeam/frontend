import styled from 'styled-components';

const TextArea = styled.div`
  width: 60%;
  margin: 3% auto;
  background-color: #ffefde;
  border-radius: 10px;
  min-height: 7rem;
  padding: 15px;
  font-size: 1rem;
`;
function DetailText() {
  return <TextArea>성격과 특이사항에 대한 내용이 들어갑니다.</TextArea>;
}

export default DetailText;
