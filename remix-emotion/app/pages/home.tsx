import type { MetaFunction } from "react-router";
import { css } from "@emotion/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const redText = css`
  color: red;
`;

const blueText = css`
  color: blue;
`;

export default function Index() {
  return (
    <>
      <p css={redText}>test</p>
      <p css={blueText}>test</p>
    </>
  );
}
