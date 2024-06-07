import React from 'react';
import styled from 'styled-components';

const TextArea = styled.div`
  width: 60%;
  margin: 3% auto;
  background-color: #ffefde;
  border-radius: 10px;
  min-height: 7rem;
  padding: 15px;
  font-size: 1rem;
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  text-align: center;
`;

interface DetailTextProps {
  specialMark: string;
}

const DetailText: React.FC<DetailTextProps> = ({ specialMark }) => {
  if (!specialMark) {
    return null;
  }

  return <TextArea>{specialMark}</TextArea>;
};

export default DetailText;
