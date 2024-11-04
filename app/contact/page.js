
import styles from "./page.module.css";

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <h1>Contact Me</h1>
      <p>
        If you’d like to discuss a project, ask a question, or just say hello,
        feel free to reach out!
      </p>
      <p>
        Email:{" "}
        <a href="mailto:onesmajdoub99@gmail.com" className={styles.contactLink}>
          onesmajdoub99@gmail.com
        </a>
      </p>
    </div>
  );
}
