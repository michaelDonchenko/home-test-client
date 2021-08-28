import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fiveDaysSales,
  topSoldItems,
  topUniqueItems,
} from '../redux/actions/orderActions'
import Title from '../components/Title'
import { makeStyles, Paper, Typography } from '@material-ui/core'

const styles = makeStyles({
  flexContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '1rem',
    justifyContent: 'center',
  },

  paperContainer: {
    margin: '1rem',
    width: '250px',
    maxWidth: '95%',
    minHeight: '300px',
    padding: '1rem',
  },
})

const Stats = () => {
  const dispatch = useDispatch()
  const classes = styles()
  const orderState = useSelector((state) => state.order)

  const {
    topSoldProducts,
    topUniqueItems: topUniqueProducts,
    loading,
    fiveDaysSales: fiveDaysSalesProducts,
  } = orderState

  useEffect(() => {
    dispatch(topSoldItems())
  }, [])

  useEffect(() => {
    dispatch(topUniqueItems())
  }, [])

  useEffect(() => {
    dispatch(fiveDaysSales())
  }, [])

  return (
    <div>
      <Title text="Stats page" />

      {loading && <p>Loading...</p>}

      <div className={classes.flexContainer}>
        <Paper className={classes.paperContainer}>
          <Typography variant="h6">Top 5 sales</Typography>
          {topSoldProducts ? (
            topSoldProducts.map((product, i) => {
              return (
                <p key={i}>
                  {product[0]} - {product[1]}
                </p>
              )
            })
          ) : (
            <p>No products found...</p>
          )}
        </Paper>

        <Paper className={classes.paperContainer}>
          <Typography variant="h6">Top 5 unique sales</Typography>
          {topUniqueProducts ? (
            topUniqueProducts.map((product, i) => {
              return (
                <p key={i}>
                  {product[0]} - {product[1]}
                </p>
              )
            })
          ) : (
            <p>No products found...</p>
          )}
        </Paper>

        <Paper className={classes.paperContainer}>
          <Typography variant="h6">past 5 days sales</Typography>
          {fiveDaysSalesProducts ? (
            Object.entries(fiveDaysSalesProducts).map((day, i) => (
              <p key={i}>{`${day[0]} - ${day[1]} $`}</p>
            ))
          ) : (
            <p>No orders yet...</p>
          )}
        </Paper>
      </div>
    </div>
  )
}

export default Stats
