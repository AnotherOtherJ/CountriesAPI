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
  /* display: flex;
  flex-wrap: wrap;
  gap: clamp(20px, 11vw, 60px);
  align-items: center;
  justify-content: center;
  padding-top: clamp(40px, 6vw, 50px); */
  /* margin-top: clamp(40px, 6vw, 50px);
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  grid-row-gap: 65px;
  grid-column-gap: 65px;
  grid-template-columns: repeat(auto-fill, 270px);
  grid-template-rows: repeat(auto-fill, 340px); */
`;
