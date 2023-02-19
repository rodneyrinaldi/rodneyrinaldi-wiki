import React from 'react'
import { useRouter } from 'next/router'

import styles from './index.module.css'

function Contact(props) {
  const router = useRouter()
  const wapp = 'https://api.whatsapp.com/send?phone=+551131646843&text=Olá, gostaria de obter maiores informações sobre:'

  return (<>

    <div className={styles.wrapperTop}>
      <a href='/'>
        <img src="/sidebar/home.png" alt="go home" className={styles.icon} />
      </a>
      <a href='#toppage'>
        <img src="/sidebar/top.png" alt="go top" className={styles.icon} />
      </a>
      {props.showback === 'yes'
        ? <a onClick={() => router.back()}>
          <img src="/sidebar/back.png" alt="go back" className={styles.icon} /></a>
        : <></>
      }

    </div>

    <div className={styles.wrapperBottom}>
      <a href={wapp} target='_blank'>
        <img src="/sidebar/whatsapp.png" alt="whatsapp" className={styles.icon} target="_blank" />
      </a>
      <a onClick={() => router.push('/message')}>
        <img src="/sidebar/email.png" alt="email" className={styles.icon} />
      </a>
    </div>

  </>);
}

export default Contact;