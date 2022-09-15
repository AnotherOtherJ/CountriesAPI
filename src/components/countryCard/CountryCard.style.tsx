import styled from "@emotion/styled";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
  width: 270px;
  height: 340px;
  background-color: ${({ theme: { element } }) => element};
  img {
    min-height: 160px;
    object-fit: cover;
  }
  div {
    padding: 25px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export default StyledCard;
