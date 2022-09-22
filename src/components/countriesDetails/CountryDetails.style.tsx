import styled from "@emotion/styled";

export const GridContainer = styled.div`
  display: grid;
  grid: repeat(7, auto) / repeat(2, 1fr);
  grid-auto-flow: column;
  row-gap: 10px;
  @media screen and (max-width: 480px) {
    grid: repeat(10, auto) / 1fr;
  }
`;

export const GridHeading = styled.h1`
  grid-column: 1 / -1;
  margin-bottom: 30px;
`;

export const GridParagraph = styled.p`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  @media screen and (max-width: 480px) {
    &:nth-of-type(5) {
      margin-bottom: 20px;
    }
  }
  &:last-child {
    grid-column: 1 / -1;
    grid-row-end: -1;
    margin-top: 50px;
  }
`;

export const Bold = styled.span`
  font-weight: bold;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
`;

export const Image = styled.img`
  height: 400px;
  width: 550px;
`;
