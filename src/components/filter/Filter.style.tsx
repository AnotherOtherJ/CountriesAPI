import styled from "@emotion/styled";

const StyledFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  flex: 1 1 100px;
  font-size: 1.1rem;
  max-width: 200px;
  background-color: ${({ theme: { element } }) => element};
  height: 60px;
`;
export default StyledFilter;
