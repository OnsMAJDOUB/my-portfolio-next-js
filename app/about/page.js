
import styles from "./page.module.css";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <Image
        src="/profile.png"
        alt="Ons Majdoub's Profile Picture"
        width={150}
        height={150}
        className={styles.profileImage}
      />
      <h1>About Me</h1>
      <p>
        I’m <strong>Ons Majdoub</strong>, a dedicated software developer with
        expertise in building scalable web applications...
      </p>
    </div>
  );
}
