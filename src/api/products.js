import axios from 'axios'
const server_url = process.env.REACT_APP_SERVER_URL

export const fetchProducts = async () =>
  await axios.get(`${server_url}/product/products`)

export const fetchProduct = async (id) =>
  await axios.get(`${server_url}/product/product/${id}`)

export const createProduct = async (values) =>
  await axios.post(`${server_url}/product/create-product`, values)

export const deleteProduct = async (id) =>
  await axios.delete(`${server_url}/product/delete/${id}`)

export const updateProduct = async (values) =>
  await axios.put(`${server_url}/product/update/${values.id}`, values.values)
