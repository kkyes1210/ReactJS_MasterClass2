import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
  useScroll,
} from "framer-motion";
import { useRef, useEffect } from "react";

const Wrapper = styled(motion.div)`
  height: 200vh; //스크롤 할 때 충분한 크기가 아니여서 길이를 늘임
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: grid;
`;

function App() {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 800],
    [
      "linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))",
      "linear-gradient(135deg, rgb(58, 194, 92), #d2bf5e)",
    ]
  );

  const { scrollY, scrollYProgress } = useScroll();
  useEffect(() => {
    scrollY.onChange(() => {
      console.log(scrollY.get(), scrollYProgress.get());
    });
  }, [scrollY, scrollYProgress]);

  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  return (
    <Wrapper style={{ background: gradient }}>
      <Box style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}
export default App;
