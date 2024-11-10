import type { NextConfig } from "next";
import stylexPlugin from "@stylexjs/nextjs-plugin";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  transpilePackages: ["@stylexjs/open-props"],
};
const __dirname = new URL(".", import.meta.url).pathname;
export default stylexPlugin({
  rootDir: __dirname,
})(nextConfig);
