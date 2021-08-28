import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import Admin from './pages/Admin'
import Home from './pages/Home'
import Stats from './pages/Stats'
import Error from './pages/Error'
import { Container, CssBaseline } from '@material-ui/core'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Router>
        <CssBaseline />
        <Navbar />
        <Container maxWidth="md">
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/home" component={Home} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/stats" component={Stats} />
            <Route exact path="*" component={Error} />
          </Switch>
        </Container>
      </Router>
    </>
  )
}

export default App
