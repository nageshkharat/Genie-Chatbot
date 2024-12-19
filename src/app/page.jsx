import styles from "./page.module.css";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div>
          <h1 className={`${styles.title}`}>Genie</h1>
          {/* <h1 className={styles.title}>Chatbot AI</h1> */}
        </div>
        <p className={styles.desc}>
          Bring your vision to life with the power of AI! Experience the future of innovation with our cutting-edge chatbot, driven by Google Generative AI to deliver unparalleled intelligence and creativity.
        </p>
        <Button url="/app" text="Get Started" />
      </div>
      <div className={`${styles.item2}`}>
        <img src="/assets/gifBot.gif" alt="Bot Animation" />
      </div>
    </div>
  );
}
