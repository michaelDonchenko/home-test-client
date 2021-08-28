import React, { useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import { useDispatch, useSelector } from 'react-redux'
import { closeCreateModal } from '../../redux/reducers/modalSlice'
import { Button, DialogContent, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { create } from '../../redux/actions/productActions'

const styles = makeStyles({
  inputField: {
    width: '300px',
    margin: '2rem auto',
    display: 'flex',
    maxWidth: '90%',
  },
})

const CreateProductModal = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const modalState = useSelector((state) => state.modal)
  const { createModal } = modalState

  const [values, setValues] = useState({
    title: '',
    price: 0,
    description: '',
    image_url: '',
  })

  const { title, price, description, image_url } = values

  const handleClsoe = () => {
    dispatch(closeCreateModal())
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(create(values))
    handleClsoe()
    setValues({
      title: '',
      price: 0,
      description: '',
      image_url: '',
    })
  }

  return (
    <Dialog
      fullWidth={true}
      maxWidth="sm"
      onClose={handleClsoe}
      open={createModal}
    >
      <Typography align="center" variant="h5" style={{ marginTop: '2rem' }}>
        Create new product
      </Typography>

      <DialogContent>
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
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default CreateProductModal
