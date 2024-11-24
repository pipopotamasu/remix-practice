import {
  type RouteConfig,
  index,
} from "@remix-run/route-config";

export default [
  index("pages/home.tsx"),
] satisfies RouteConfig;