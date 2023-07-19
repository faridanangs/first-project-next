import React from "react";
import styles from "./category.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";
import {data, items} from './data'
import { notFound } from "next/navigation";

const getData = ((cat)=> {
  const data = items[cat];
  if(data){
    return data
  }
  return notFound()
})

const Category = ({ params }) => {
  const data = getData(params.category)
  return (
    <div className={styles.container}>
      <h1 className={styles.cartTitle}>{params.category}</h1>
      {
        data.map((item)=> (
          <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>{item.desc}</p>
          <Button url="#" text="More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={item.image}
            className={styles.img}
            fill={true}
            alt="Image category"
          />
        </div>
      </div>
        ))
      }
    </div>
  );
};

export default Category;
