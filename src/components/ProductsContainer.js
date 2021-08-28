import React from 'react'
import { makeStyles } from '@material-ui/core'
import ProductItem from './ProductItem'

const styles = makeStyles({
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '0.2rem',
    marign: '1rem 0',
    justifyContent: 'center',
  },
})

const ProductsContainer = ({ products }) => {
  const classes = styles()
  return (
    <div className={classes.wrapper}>
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </div>
  )
}

export default ProductsContainer
