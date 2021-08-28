import React, { useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import { useDispatch, useSelector } from 'react-redux'
import { closeEditModal } from '../../redux/reducers/modalSlice'
import { Button, DialogContent, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { clearProduct, resetProductId } from '../../redux/reducers/productSlice'
import { update } from '../../redux/actions/productActions'

const styles = makeStyles({
  inputField: {
    width: '300px',
    margin: '2rem auto',
    display: 'flex',
    maxWidth: '90%',
  },
})

const UpdateProductModal = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const modalState = useSelector((state) => state.modal)
  const productState = useSelector((state) => state.product)
  const { editModal } = modalState
  const { product, loading, productId } = productState

  const [values, setValues] = useState({
    id: '',
    title: '',
    price: 0,
    description: '',
    image_url: '',
  })

  const { title, price, description, image_url, id } = values
  const obj = {
    id: id,
    values: { title, price, description, image_url },
  }

  if (product && productId) {
    dispatch(resetProductId())
    setValues({
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      image_url: product.image_url,
    })
  }

  const handleClsoe = () => {
    dispatch(closeEditModal())
    dispatch(clearProduct())
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleClsoe()
    dispatch(update(obj))
  }

  return (
    <Dialog
      fullWidth={true}
      maxWidth="sm"
      onClose={handleClsoe}
      open={editModal}
    >
      <Typography align="center" variant="h5" style={{ marginTop: '2rem' }}>
        Update product
      </Typography>

      <DialogContent>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <TextField
              name="title"
              value={title}
              className={classes.inputField}
              type="text"
              label="Title"
              onChange={handleChange}
              required
            />
            <TextField
              className={classes.inputField}
              type="number"
              label="Price"
              name="price"
              value={price}
              onChange={handleChange}
              required
            />
            <TextField
              className={classes.inputField}
              multiline
              rows={5}
              type="text"
              label="Description"
              name="description"
              value={description}
              onChange={handleChange}
              required
            />
            <TextField
              className={classes.inputField}
              type="url"
              label="Image url"
              name="image_url"
              value={image_url}
              onChange={handleChange}
              required
            />

            <Button
              className={classes.inputField}
              color="primary"
              variant="contained"
              type="submit"
            >
              Update
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default UpdateProductModal
