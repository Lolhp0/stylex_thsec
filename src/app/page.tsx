import Image from "next/image";
import * as stylex from "@stylexjs/stylex";

export default function Home() {
  return (
    <>
        <h1 {...stylex.props(styles.font, styles.size)}>Hello WORLD</h1>
    </>
  );
}

const styles = stylex.create({
  font: {
    fontWeight: 800,
  },
  size: {
    fontSize: "3rem",
  }
})
