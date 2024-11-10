import React from 'react'
import * as stylex from "@stylexjs/stylex";

const Loading = () => {
  return (
    <div {...stylex.props(styles.width, styles.height, styles.textCenter, styles.display, styles.flexDir, styles.position)}>

    </div>
  )
}

const styles = stylex.create({
    width: {width: "100%"},
    height: {height: "fit-content"},
    textCenter: {textAlign: "center"},
    display: {display: "flex"},
    flexDir: {flexDirection: "column"},
    position: {position: "relative"}
})

export default Loading

