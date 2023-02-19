import React from 'react'

import Header from '../header'
import Main from '../main'
import Sidebar from '../sidebar'
import Footer from '../footer'

function Layout({ children, showback }) {

  return (<>
    <header>
      <Header />
    </header>

    <main>
      <Main>
        {children}
      </Main>
    </main>

    <aside>
      <Sidebar showback={showback} />
    </aside>

    <footer>
      <Footer />
    </footer>
  </>)
}

export default Layout