import Chat from "@/app/components/Chat";
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={`${styles.page}`}>
      <Chat/>
    </div>
  );
}
