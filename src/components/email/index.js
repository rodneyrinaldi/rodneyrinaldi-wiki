import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import emailjs from 'emailjs-com'

import styles from './index.module.css'

function Email(props) {
  const router = useRouter()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [policie, setPolicie] = useState("")

  // const { query: { service }, } = router
  const service = 'fale conosco blog.rodneyrinaldi.com'

  function handleSubmit(e) {
    e.preventDefault()

    // console.log('props')
    // console.log(props.emailjsServiceId)
    // console.log(props.emailjsTemplateId)
    // console.log(props.emailjsUserId)
    // console.log('env')
    // console.log(process.env.EMAILJS_SERVICE_ID)
    // console.log(process.env.EMAILJS_TEMPLATE_ID)
    // console.log(process.env.EMAILJS_USER_ID)

    const fields = `{name:${name}, email:${email}, message:${message}}`
    const params = { sitename: service, emailaddress: email, emailmessage: fields }

    //return

    emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      params,
      process.env.EMAILJS_USER_ID
    ).then((result) => {
      console.log(result.text)
    }, (error) => {
      console.log(error.text)
    })

    setName('')
    setEmail('')
    setMessage('')

    router.back()
  }

  return (
    <>
      <div className={styles.container}>
        <div>
          <form onSubmit={handleSubmit}>

            <label htmlFor="contactName">Nome</label>
            <input type="text" id="contactName"
              onChange={e => setName(e.target.value)}
            />

            <label htmlFor="contactEmail">Email</label>
            <input type="email" id="contactEmail"
              onChange={e => setEmail(e.target.value)}
            />

            <label htmlFor="contactMessage">Mensagem</label>
            <textarea id="contactMessage"
              onChange={e => setMessage(e.target.value)}
            />

            <input type="submit" value="E N V I A R" className={styles.goForward} />

            <p>
              <input type="checkbox" id="myCheck"
                onChange={e => setPolicie(e.target.value)}
              />
              Concordo com a {' '}
              <Link href="/policies">
                <a href="#" style={{ textDecoration: 'underline' }}>Política de Privacidade e Proteção de Dados</a>
              </Link>
            </p>

          </form>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  // console.log('getStaticProps')
  // console.log(process.env.EMAILJS_SERVICE_ID)
  // console.log(process.env.EMAILJS_TEMPLATE_ID)
  // console.log(process.env.EMAILJS_USER_ID)
  return {
    props: {
      emailjsServiceId: process.env.EMAILJS_SERVICE_ID,
      emailjsTemplateId: process.env.EMAILJS_TEMPLATE_ID,
      emailjsUserId: process.env.EMAILJS_USER_ID
    },
    query: {

    }
  }
}

export async function getServerProps() {
  // console.log('getServerProps')
  // console.log(process.env.EMAILJS_SERVICE_ID)
  // console.log(process.env.EMAILJS_TEMPLATE_ID)
  // console.log(process.env.EMAILJS_USER_ID)
  return {
    props: {
      emailjsServiceId: process.env.EMAILJS_SERVICE_ID,
      emailjsTemplateId: process.env.EMAILJS_TEMPLATE_ID,
      emailjsUserId: process.env.EMAILJS_USER_ID
    },
    query: {

    }
  }
}

export default Email

