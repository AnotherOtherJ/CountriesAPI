import styled from "@emotion/styled";

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 145px;
  height: 30px;
  background-color: ${({ theme: { element } }) => element};
  border-radius: 3px;
`;

export default StyledButton;
