import styled from "@emotion/styled";

const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  height: 60px;
  flex: 1 1 290px;
  font-size: 1.1rem;
  max-width: clamp(200px, 100%, 480px);
  background-color: ${({ theme: { element } }) => element};
  border-radius: 4px;
  padding: 0 30px;
  user-select: none;
  input {
    width: 100%;
    background-color: transparent;
    color: inherit;
    border: none;
    ::placeholder {
      color: inherit;
    }
    :focus {
      outline: none;
    }
  }
`;

export default StyledSearch;
