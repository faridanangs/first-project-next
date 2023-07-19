import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <Image
          src="https://images.pexels.com/photos/2451568/pexels-photo-2451568.jpeg?auto=compress&cs=tinysrgb&w=300"
          className={styles.img}
          fill={true}
          alt="img about"
        />
        <div className={styles.imgText}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
          <h2 className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            ea?
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.items}>
          <h1 className={styles.title}>Who is me?</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
            veritatis tempora mollitia saepe alias nesciunt quasi facere sequi
            corrupti eveniet! Ipsam molestiae delectus eaque officia, placeat
            vel omnis commodi repellendus!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            voluptates necessitatibus possimus ducimus corporis exercitationem
            rem, ad inventore doloribus eos ipsum quis beatae error voluptatum,
            consectetur aliquam iure. Nihil, tempore.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            possimus beatae harum magni culpa ipsa, labore sed temporibus
            accusantium minus reiciendis ad reprehenderit! Culpa iste neque amet
            quis sunt laudantium.
          </p>
        </div>
        <div className={styles.items}>
          <h1 className={styles.title}>what is do?</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
            veritatis tempora mollitia saepe alias nesciunt quasi facere sequi
            corrupti eveniet! Ipsam molestiae delectus eaque officia, placeat
            vel omnis commodi repellendus!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            voluptates necessitatibus possimus ducimus corporis exercitationem
            <br />
            <br /> - Lorem, ipsum.
            <br />
            <br /> - Lorem, ipsum.
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
