import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledLoader = styled.div`
  display: grid;
  place-items: center;
  flex: 1;
  font-size: 4rem;
  line-height: 0;
`;

export const StyledLoaderWrapper = styled(motion.div)``;

export default StyledLoader;
