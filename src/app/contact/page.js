import React from 'react'
import styles from './contact.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image 
            src='/contact.png'
            fill={true}
            className={styles.img}
            alt='contact img'
          />
        </div>
        <fomr className={styles.form}>
          <input type="text" placeholder='Name' className={styles.input}/>
          <input type="Email" placeholder='Email' className={styles.input}/>
          <textarea className={styles.textArea} cols="30" rows="10" placeholder='Message'></textarea>
          <Button url='#' text='Send' />
        </fomr>
      </div>
    </div>
  )
}

export default Contact