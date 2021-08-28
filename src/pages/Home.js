import React, { useEffect } from 'react'
import { getProducts } from '../redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import Title from '../components/Title'
import ProductsContainer from '../components/ProductsContainer'
import { Button, makeStyles, Menu, Typography } from '@material-ui/core'
import { placeOrder } from '../api/order'
import { removeCart } from '../redux/reducers/cartSlice'

const styles = makeStyles({
  shoppingButton: {
    marginLeft: 'auto',
    display: 'flex',
    marginTop: '2rem',
  },
  menuWrapper: {
    width: '300px',
    maxWidth: '90%',
    minHeight: '350px',
    margin: '1rem auto',
    display: 'flex',
    flexDirection: 'column',
  },
})

const Home = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const productState = useSelector((state) => state.product)
  const cartState = useSelector((state) => state.cart)
  const { loading, products } = productState
  const { cart } = cartState

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const countTotal = (cart) => {
    let cartPrices = []

    if (cart === null) {
      return
    }

    cart.forEach((cartItem) => cartPrices.push(cartItem.price))
    const reducer = (accumulator, currentValue) => accumulator + currentValue

    return cartPrices.reduce(reducer)
  }

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const handlePlaceOrder = async () => {
    const { data } = await placeOrder({
      products: cart,
      cartTotal: countTotal(cart),
    })
    if (data.message === 'Order created succefully') {
      localStorage.removeItem('cart')
      dispatch(removeCart())
    }
  }

  return (
    <>
      <div>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          className={classes.shoppingButton}
          variant="contained"
          color="primary"
        >
          Shopping cart {` / ${cart && cart.length > 0 ? cart.length : ''}`}
        </Button>
        <Title text="Home page" />

        {loading && <p>Loading...</p>}
        {!loading && products && products.length === 0 && (
          <p>No products found</p>
        )}
        {!loading && products && products.length > 0 && (
          <ProductsContainer products={products} />
        )}

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <div className={classes.menuWrapper}>
            <div style={{ flexGrow: 1 }}>
              {cart === null ? (
                <Typography variant="h6">No products in cart...</Typography>
              ) : (
                <>
                  {cart.map((item, i) => (
                    <Typography key={i} variant="h6">
                      {item.title}
                      <span style={{ float: 'right' }}>{item.price} $</span>
                    </Typography>
                  ))}
                </>
              )}
            </div>

            <div>
              <Typography variant="h6">
                Cart total: {countTotal(cart)} $
              </Typography>

              <Button
                onClick={handlePlaceOrder}
                variant="contained"
                color="primary"
                style={{
                  width: '300px',
                  maxWidth: '90%',
                  margin: '0.5rem 0',
                }}
              >
                Pay
              </Button>
            </div>
          </div>
        </Menu>
      </div>
    </>
  )
}

export default Home
