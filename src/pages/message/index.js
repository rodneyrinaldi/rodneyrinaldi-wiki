import React from 'react'

import Layout from '../../components/layout'
import Title from '../../components/title'
import Email from '../../components/email'

import styles from './index.module.css'

function Message() {
  return (<>
    <Layout showback='yes'>
      <Title title="ENVIE SUA MENSAGEM" />
      <div className={styles.row}>
        <Email />
      </div>
    </Layout>
  </>)
}

export default Message