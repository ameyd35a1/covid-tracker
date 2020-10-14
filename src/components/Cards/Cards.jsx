import React from 'react';
import styles from './Cards.module.css';
import {
  Card,
  Grid,
  Typography,
  CardContent,
  CircularProgress,
} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({ data: { Confirmed, Deaths, Recovered } }) => {
  return !Confirmed ? (
    <div>
      <CircularProgress />
    </div>
  ) : (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={Confirmed} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date().toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of Confirmed cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={Recovered} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date().toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of Recovered from COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={Deaths} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date().toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of Deaths due to COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
