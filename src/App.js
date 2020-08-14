//@flow
import {default as React, useEffect} from 'react'
import {ThemeProvider} from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom'
import {hot} from 'react-hot-loader'

import GlobalStyles from './base/global-styles'
import theme from './base/theme'
import {Navigation, Footer} from './components'

import Home from './views/Home'
import About from './views/About'
import Services from './views/Services'
import Team from './views/Team'
import Contact from './views/Contact'
import Partners from './views/Partners'

const Scroll = () => {
  const {pathname, search} = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [pathname, search])

  return null
}

function App() {
  return (
    <ThemeProvider theme={theme()}>
      <GlobalStyles />
      <Router>
        <Navigation />
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route path={'/about'} component={About} />
          <Route path={'/services'} component={Services} />
          <Route path={'/people'} component={Team} />
          <Route path={'/contact'} component={Contact} />
          <Route path={'/partners'} component={Partners} />
        </Switch>
        <Footer />
        {/*<Scroll />*/}
      </Router>
    </ThemeProvider>
  )
}

export default hot(module)(App)
