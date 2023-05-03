import styled from '@emotion/styled';

export const TrendingItem = styled.li`
  border-radius: 8px;
  overflow: hidden;
  background-color: #af93aa12;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 352px;
  transition-duration: 250ms;
  transition-property: scale;
  transition-timing-function: ease-in-out;

  &:hover {
    scale: 1.02;
    box-shadow: 0px 1px 2px rgb(255 0 249 / 31%),
      0px 2px 4px rgb(255 0 245 / 50%), 0px 4px 8px rgb(255 235 0 / 31%),
      0px 8px 16px rgb(255 247 254 / 35%);
  }
`;

export const ImgThumb = styled.div`
  width: 352px;
  height: 528px;
`;

export const TrendingGallery = styled.ul`
  padding: 32px 0;
  list-style: none;
  display: flex;

  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const TitleMovieThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 60px;
  padding: 16px 0;
  text-align: center;
  font-size: 12px;
`;
