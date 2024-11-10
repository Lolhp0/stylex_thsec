import React from 'react'
import * as stylex from "@stylexjs/stylex";

const Header = () => {
  return (
    <header {...stylex.props(styles.headerWidth, styles.headerHeight, styles.headerPosition, styles.headerZindex, styles.headerTop, styles.headerLeft, styles.headerRight)}>

    </header>
  )
}

const styles = stylex.create({
    headerWidth: {width: "100%"},
    headerHeight: {width: "60px"},
    headerPosition: {position: "sticky"},
    headerTop: {top: 0},
    headerLeft: {left: 0},
    headerRight: {right: 0},
    headerZindex: {zIndex: 9999},
})

export default Header