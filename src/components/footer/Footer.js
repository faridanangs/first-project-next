import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>@Nextjs Police 2023</div>
      <div className={styles.social}>
        <Image src='/1.png' width={25} height={25} alt='gorden project fb' className={styles.icon} />
        <Image src='/2.png' width={25} height={25} alt='gorden project instagram' className={styles.icon} />
        <Image src='/3.png' width={25} height={25} alt='gorden project twit' className={styles.icon} />
      </div>
    </div>
  )
}

export default Footer