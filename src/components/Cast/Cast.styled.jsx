import styled from '@emotion/styled';

export const CastItem = styled.li`
  border-radius: 8px;
  overflow: hidden;
  background-color: #af93aa12;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 280px;
  transition-duration: 250ms;
  transition-property: scale;
  transition-timing-function: ease-in-out;
`;

export const ProfileImgThumb = styled.div`
  // width: 280px;
  // height: 352px;
`;

export const ActorsGallery = styled.ul`
  padding: 32px 0;

  display: flex;

  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ActorNameThumb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;

  height: 60px;
  padding: 16px 0;
  text-align: center;
  font-size: 12px;
`;

export const ActorPhoto = styled.img`
  object-fit: cover;
`;
