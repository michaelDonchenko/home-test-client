import React, { useEffect } from 'react'
import { getProduct, getProducts } from '../redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import Title from '../components/Title'
import ProductsTable from '../components/ProductsTable'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { openCreateModal } from '../redux/reducers/modalSlice'
import CreateProductModal from '../components/modals/CreateProductModal'
import RefreshList from '../utils/RefreshList'
import UpdateProductModal from '../components/modals/UpdateProductModal'

const styles = makeStyles({
  addButton: {
    marginLeft: 'auto',
    display: 'flex',
    marginBottom: '2rem',
  },
})

const Admin = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const productState = useSelector((state) => state.product)
  const { loading, error, products, productId } = productState

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  useEffect(() => {
    if (productId) {
      dispatch(getProduct(productId))
    }
  }, [productId])

  const handleCreateProductOpen = () => {
    dispatch(openCreateModal())
  }

  return (
    <>
      <div>
        <Title text="Admin page" />

        <Button
          onClick={handleCreateProductOpen}
          className={classes.addButton}
          color="primary"
          variant="contained"
        >
          Add new
        </Button>

        {loading && <p>Loading...</p>}
        {!loading && products && !products.length && (
          <p>No products found...</p>
        )}
        {!loading && products && products.length > 0 && (
          <ProductsTable products={products} />
        )}
      </div>

      {/* modals */}
      <CreateProductModal />
      <UpdateProductModal />

      {/* utils */}
      <RefreshList />
    </>
  )
}

export default Admin
