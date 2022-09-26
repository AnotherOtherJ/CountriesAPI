import styled from "@emotion/styled";

import StyledButton from "../button/Button";

export const GridContainer = styled.div`
  display: grid;
  grid: repeat(7, auto) / repeat(2, 1fr);
  row-gap: 10px;
  grid-auto-flow: column;
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
  align-items: center;
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
  font-weight: 600;
`;

export const Flex = styled.div`
  margin-top: 80px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: clamp(50px, 10vw, 150px);
`;

export const Something = styled.div`
  display: flex;
  flex-direction: column;
  padding: clamp(20px, 6vw, 80px);
  align-content: center;
  flex-wrap: wrap;
  font-size: 16px;

  > ${StyledButton} {
    height: 40px;
  }
`;

export const Image = styled.img`
  aspect-ratio: 1.4/1;
  width: 550px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
`;
