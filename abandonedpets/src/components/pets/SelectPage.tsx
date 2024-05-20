import styled from 'styled-components';
import Pagination from '@mui/material/Pagination';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3%;
`;

function SelectPage() {
  return (
    <Wrapper>
      <Pagination count={10} color="primary" size="large" />
    </Wrapper>
  );
}

export default SelectPage;
