import type { MetaFunction } from "@remix-run/node";
import { css } from "@emotion/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const hoge = css`
  color: red;
`;

export default function Index() {
  return <p css={hoge}>test</p>;
}
