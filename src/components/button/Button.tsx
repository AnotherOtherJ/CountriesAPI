import styled from "@emotion/styled";

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  max-width: 130px;
  padding: 3px 20px;
  background-color: ${({ theme: { element } }) => element};
  border-radius: 3px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.15);
`;

export default Button;
