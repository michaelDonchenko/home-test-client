import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { Container } from '@material-ui/core'

const styles = makeStyles({
  navLink: {
    color: 'white',
    textDecoration: 'none',
  },
})

const Navbar = () => {
  const classes = styles()

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Button color="inherit">
            <Link className={classes.navLink} to="/home">
              Home
            </Link>
          </Button>

          <Button color="inherit">
            <Link className={classes.navLink} to="/admin">
              Admin
            </Link>
          </Button>

          <Button color="inherit">
            <Link className={classes.navLink} to="/stats">
              Stats
            </Link>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
