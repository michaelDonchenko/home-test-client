import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/actions/productActions'
import { resetSuccess } from '../redux/reducers/productSlice'

const RefreshList = () => {
  const dispatch = useDispatch()
  const productState = useSelector((state) => state.product)
  const { success } = productState

  const checkSuccess = () => {
    if (success) {
      dispatch(resetSuccess())
      dispatch(getProducts())
    }
  }

  return <>{checkSuccess()}</>
}

export default RefreshList
