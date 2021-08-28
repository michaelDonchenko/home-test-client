import axios from 'axios'
const server_url = process.env.REACT_APP_SERVER_URL

export const placeOrder = async (values) =>
  await axios.post(`${server_url}/order/place-order`, values)

export const topFiveSoldItems = async () =>
  await axios.get(`${server_url}/order/top-sold-items`)

export const topFiveUniqueItems = async () =>
  await axios.get(`${server_url}/order/top-unique-items`)

export const pastFiveDaysSales = async () =>
  await axios.get(`${server_url}/order/past-five-days-sales`)
