import styled from "@emotion/styled";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 80px;
  padding: 0 clamp(20px, 5vw, 80px);
  background-color: ${({ theme: { element } }) => element};
`;

export default StyledNav;
