import styles from "../styles/Shapes.module.css";

export default function Shapes() {
  return (
    <>
      <div className={styles.shapes}></div>
      <div className={styles.particules}>
        {Array.from({ length: 15 }, (_, i) => (
          <div key={i} className={styles.particle} />
          
        ))}
      </div>
    </>
  );
}