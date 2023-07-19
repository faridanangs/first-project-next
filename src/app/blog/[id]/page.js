import React from "react";
import styles from "./id.module.css";
import Image from "next/image";
import {notFound} from 'next/navigation'

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store'
  });
  if (!res.ok) {
    return notFound()
  }
  return res.json();
}

const BlogPost = async ({params}) => {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.body}</p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/2086361/pexels-photo-2086361.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Lorem, ipsum.</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="https://images.pexels.com/photos/2086361/pexels-photo-2086361.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
          cupiditate explicabo! Veniam aspernatur debitis magnam sunt ad
          explicabo dolorum ipsa ratione adipisci similique at autem blanditiis
          nihil, vero ipsam commodi fuga reprehenderit vel consectetur nobis
          voluptate culpa ut quidem repellendus! Accusantium quidem delectus
          praesentium amet eius molestiae! Alias dolorum, pariatur hic
          aspernatur nesciunt neque quis molestias maiores sunt eveniet animi
          vero, consectetur quod blanditiis. Corrupti totam ipsum maxime nihil
          praesentium, cupiditate voluptatum culpa aut ullam ea dicta est
          temporibus, eveniet eum quo. Odit non pariatur rerum error accusantium
          assumenda reiciendis optio, alias, qui illo consectetur facilis, neque
          recusandae saepe consequatur deleniti? Quas ratione error ipsam quam!
          Aperiam quaerat cupiditate, officia maiores mollitia labore? Dolorem
          molestias saepe tenetur perspiciatis amet cupiditate eveniet
          accusantium, dignissimos, qui cumque, iure sunt illum odit aperiam
          autem! Non hic quae quidem cum eius aut, totam sed dolores tenetur,
          blanditiis esse dicta eligendi impedit quisquam. Eius sit atque
          corrupti nihil quia rerum ipsam animi consectetur omnis a accusantium,
          nemo voluptatem quo! Quasi ratione placeat eligendi id autem,
          accusamus dolorem dignissimos voluptatem quaerat, maiores iure
          similique amet blanditiis enim eum nesciunt perspiciatis eos fuga
          assumenda beatae qui nam neque quibusdam eius? Et, maxime impedit
          expedita alias eveniet nostrum!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
