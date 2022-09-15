import styled from "@emotion/styled";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  @media screen and (max-width: 480px) {
    gap: 40px;
  }
  flex-wrap: wrap;
`;

export const StyledSection = styled.main`
  margin-top: clamp(40px, 6vw, 50px);
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  grid-row-gap: 65px;
  grid-column-gap: 65px;
  grid-template-columns: repeat(auto-fill, 270px);
  grid-template-rows: repeat(auto-fill, 340px);
`;
