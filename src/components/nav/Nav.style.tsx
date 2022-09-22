import styled from "@emotion/styled";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 80px;
  font-size: 1.1rem;
  padding: 0 clamp(20px, 6vw, 80px);
  background-color: ${({ theme: { element } }) => element};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
`;

export default StyledNav;
