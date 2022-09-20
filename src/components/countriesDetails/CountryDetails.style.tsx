import styled from "@emotion/styled";

export const GridContainer = styled.div`
  display: grid;
  grid: repeat(7, 1fr) / repeat(2, 1fr);
  grid-auto-flow: column;
`;

export const GridHeading = styled.h1`
  grid-column: 1 / -1;
`;

export const GridParagraph = styled.p`
  &:last-child {
    grid-column: 1 / -1;
    grid-row: 7 / auto;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const Image = styled.img`
  height: 400px;
  width: 550px;
`;
