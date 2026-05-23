import styled from "styled-components";

export const SongCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  padding: 20px;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: 20px;
`;
export const AlbumTitle = styled.h3`
  color: ${({ featured, theme }) =>
    featured
      ? theme.colors.primary
      : theme.colors.text};
`;