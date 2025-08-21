import styles from "./page.module.css";
import { Profile } from "./components/Profile";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Site criado para a disciplina Programação Front-End</h1>
      <main className={styles.main}>
        <Profile />
      </main>
    </div>
  );
}
