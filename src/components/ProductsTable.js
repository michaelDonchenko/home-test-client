import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { destroy } from '../redux/actions/productActions'
import { setProductToUpdate } from '../redux/reducers/productSlice'
import { openEditModal } from '../redux/reducers/modalSlice'

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
  button: {
    margin: '0.2rem',
    display: 'flex',
  },
  buttonsWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
})

const ProductsTable = ({ products }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(destroy(id))
  }

  const handleUpdate = (id) => {
    dispatch(setProductToUpdate(id))
    dispatch(openEditModal())
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, i) => {
            return (
              <TableRow>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.price} $</TableCell>
                <TableCell>
                  <div className={classes.buttonsWrapper}>
                    <Button
                      className={classes.button}
                      variant="outlined"
                      style={{ color: 'blue' }}
                      onClick={() => handleUpdate(product.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleDelete(product.id)}
                      className={classes.button}
                      variant="outlined"
                      style={{ color: 'red' }}
                    >
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ProductsTable
