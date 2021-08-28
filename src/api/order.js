import axios from 'axios'
const server_url = process.env.REACT_APP_SERVER_URL

export const placeOrder = async (values) =>
  await axios.post(`${server_url}/order/place-order`, values)

export const topFiveSoldItems = async (options) =>
  await axios.get(`${server_url}/order/top-sold-items?options=${options}`)
