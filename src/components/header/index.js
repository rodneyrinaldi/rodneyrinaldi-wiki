import React from 'react';
import Head from 'next/head'

import styles from './index.module.css'

function Header(props) {
  return (<>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>blog.rodneyrinaldi</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.container}>
      <div >
        <img src="/rodneyrinaldi.svg" alt="rodneyrinaldi" className={styles.logo2} />
      </div>
    </div>
  </>)
}

export default Header