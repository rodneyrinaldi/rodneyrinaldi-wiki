import React from 'react'

import styles from './index.module.css'

function Footer() {
  return (
    <>
      <div className={styles.container}>
        <a href="https://adv.rodneyrinaldi.com">adv.rodneyrinaldi.com</a>
        <a href="https://rodneyrinaldi.com"><img src="/rr-ico.svg"
          alt="rodneyrinaldi" /></a>
        <a href="https://dpo.rodneyrinaldi.com">dpo.rodneyrinaldi.com</a>
      </div>
      <div className={styles.container}>
        <p>Travessa Dona Paula 13 Higienópolis São Paulo SP (11) 3164-6843</p>
      </div>
      <div className={styles.developed}>
        <a href="https://dev.rodneyrinaldi.com">dev.rodneyrinaldi.com</a>
      </div>
    </>
  )
}

export default Footer