import styled from "@emotion/styled";

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  z-index: 2;
  justify-content: space-between;
  flex: 0 0 80px;
  font-size: 1.1rem;
  padding: 0 clamp(20px, 6vw, 80px);
  background-color: ${({ theme: { element } }) => element};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
`;

export default StyledNav;
