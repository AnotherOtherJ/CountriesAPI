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
  width: 100%;
`;
