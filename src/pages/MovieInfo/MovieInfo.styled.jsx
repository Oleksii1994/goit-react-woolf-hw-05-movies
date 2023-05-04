import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieDetailsThumb = styled.div`
  padding: 24px 32px;
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;

  width: 80px;

  background-color: #000000;
  color: #963d77;
  padding: 6px 8px;
  border-radius: 4px;

  &:hover {
    color: #e893d1;
  }
`;

export const MovieInfoCard = styled.div`
  padding: 32px 0;
  display: flex;
  gap: 36px;
`;

export const TextContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const OverviewBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const GenresBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AdditionalInfoBox = styled.div`
  padding: 32px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AdditionalInfoList = styled.ul`
  display: flex;
  gap: 16px;
`;

export const AdditionalItemLink = styled(Link)`
  color: #995085;
  &:hover {
    color: #e893d1;
  }
`;
