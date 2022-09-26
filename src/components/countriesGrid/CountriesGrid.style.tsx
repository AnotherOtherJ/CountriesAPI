import styled from "@emotion/styled";
import { m } from "framer-motion";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  flex-wrap: wrap;
  @media screen and (max-width: 480px) {
    gap: 40px;
  }
`;

export const StyledSection = styled(m.main)`
  display: grid;
  grid: repeat(auto-fit, 340px) / repeat(auto-fit, 270px);
  gap: clamp(20px, 11vw, 60px);
  justify-content: center;
  padding-top: clamp(40px, 6vw, 50px);
`;
