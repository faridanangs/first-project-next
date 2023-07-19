import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam magni,
          saepe consectetur voluptatum autem temporibus eum consequatur
          quibusdam enim velit veritatis pariatur non, ex expedita unde. Ad quia
          maiores tenetur?
        </p>
        <Button url='/portfolio' text='See Our Work' className={styles.button} />
      </div>
      <div className={styles.items}>
        <Image src={Hero} className={styles.img} />
      </div>
    </div>
  );
}
