import styles from "./css-modules/customCursor.module.css";

function CustomCursor({ mousePos, cursorWidth }) {
  return (
    <div
      className={styles.customCursor}
      style={{
        position: "absolute",
        width: `${cursorWidth}px`,
        height: `${cursorWidth}px`,
        borderRadius: `${cursorWidth}px`,
        left: mousePos.x - cursorWidth / 2,
        top: mousePos.y - cursorWidth / 2,
        backgroundColor: "white",
        border: "solid 1px white",
        transform: `scale(${cursorWidth != 40 ? 1.5 : 1})`
      }}
    />
  );
}

export default CustomCursor;
