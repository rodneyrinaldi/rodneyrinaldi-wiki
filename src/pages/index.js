import React from 'react'
import Layout from '../components/layout'
import styles from '../styles/index.module.css'

function Index() {
  return (
    <>
      <Layout showback='no'>
        <div className={styles.grid}>
          <p>Aplicação em desenvolvimento</p>
          <p>Novidades em breve!</p>
        </div>
      </Layout>
    </>
  )
}

export default Index