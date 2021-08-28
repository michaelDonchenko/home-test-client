import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { topSoldItems } from '../redux/actions/orderActions'

const Stats = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(topSoldItems('unique'))
  }, [])

  return <div>stats</div>
}

export default Stats
