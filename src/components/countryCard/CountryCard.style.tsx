import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${({ theme: { element } }) => element};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  img {
    min-height: 160px;
    backface-visibility: hidden;
    transform: translateZ(0);
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
