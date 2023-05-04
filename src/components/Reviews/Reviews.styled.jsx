import styled from '@emotion/styled';

export const ReviewsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
`;

export const ReviewItem = styled.li`
  border-radius: 4px;
  background-color: #221c21;
  padding: 20px;
  box-shadow: 0px 1px 2px rgb(255 158 0 / 40%), 0px 2px 4px rgb(255 0 245 / 30%),
    0px 4px 8px rgb(255 221 0 / 40%), 0px 4px 16px rgb(255 247 254 / 10%);
`;
