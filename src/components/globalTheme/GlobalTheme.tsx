import { css, Global, useTheme } from "@emotion/react";
import { memo } from "react";

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
          body {
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
            font-size: 14px;
          }
          #root {
            display: flex;
            flex-direction: column;
            isolation: isolate;
            overflow: auto;
            width: 100%;
            height: 100%;
          }
          scrollbar-width: thin;
          scrollbar-color: ${`${theme.font} ${theme.background}`};
          ::-webkit-scrollbar {
            width: 10px;
            background-color: ${theme.background};
          }
          ::-webkit-scrollbar-thumb {
            background-color: ${theme.font};
            border-radius: 4px;
          }
        `}
      />
    </>
  );
};

export default memo(GlobalTheme);
