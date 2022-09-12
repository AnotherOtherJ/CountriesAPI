import { css, Global, useTheme } from "@emotion/react";
import { memo } from "react";

export const colors: Record<"dark" | "light", Record<string, string>> = {
  dark: {
    background: "hsl(207, 26%, 17%)",
    element: "hsl(209, 23%, 22%)",
    input: "hsl(0, 0%, 52%)",
    font: "hsl(0, 0%, 100%)",
  },
  light: {
    background: "hsl(0, 0%, 98%)",
    element: "hsl(0, 0%, 100%)",
    input: "hsl(0, 0%, 52%)",
    font: "hsl(200, 15%, 8%)",
  },
};

const GlobalTheme = () => {
  const theme = useTheme();
  return (
    <>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          * {
            margin: 0;
          }
          html,
          body,
          #root {
            height: 100%;
          }
          body {
            line-height: 1.5;
            -webkit-font-smoothing: antialiased;
          }
          img,
          picture,
          video,
          canvas,
          svg {
            display: block;
            max-width: 100%;
          }
          input,
          button,
          textarea,
          select {
            font: inherit;
          }
          p,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            overflow-wrap: break-word;
          }
        `}
      />
      <Global
        styles={css`
          body {
            font-family: "Nunito Sans", sans-serif;
            color: ${theme.font};
            background: ${theme.background};
          }
          #root {
            display: flex;
            flex-direction: column;
            align-content: center;
            align-items: center;
            isolation: isolate;
            overflow: auto;
          }
        `}
      />
    </>
  );
};

export default memo(GlobalTheme);
