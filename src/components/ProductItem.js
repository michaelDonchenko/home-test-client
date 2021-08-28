import React from 'react'
import { Button, makeStyles, Paper, Typography } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/reducers/cartSlice'

const styles = makeStyles({
  wrapper: {
    width: '280px',
    maxWidth: '90%',
    display: 'flex',
    margin: '0.5rem',
    padding: '0.5rem',
    minHeight: '400px',
    flexDirection: 'column',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
})

const ProductItem = ({ product }) => {
  const classes = styles()
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    let cart = []
    let productToAdd = {
      title: product.title,
      price: product.price,
    }

    if (localStorage.getItem('cart') === null) {
      localStorage.setItem('cart', JSON.stringify([productToAdd]))

      dispatch(addToCart([productToAdd]))
    } else {
      cart = JSON.parse(localStorage.getItem('cart'))
      cart.push(productToAdd)

      localStorage.setItem('cart', JSON.stringify(cart))
      dispatch(addToCart(cart))
    }
  }

  return (
    <Paper elevation={2} className={classes.wrapper}>
      <Typography
        variant="h5"
        align="center"
        style={{ marginBottom: '0.5rem' }}
      >
        {product.title}
      </Typography>

      <div className={classes.details}>
        <img src={product.image_url} alt={product.title} />
        <p>{product.description}</p>
        <p>Price: {product.price} $</p>
      </div>

      <Button onClick={handleAddToCart} variant="contained" color="primary">
        Buy
      </Button>
    </Paper>
  )
}

export default ProductItem
