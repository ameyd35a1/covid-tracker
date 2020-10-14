import React, { useEffect, useState } from 'react';
import { fetchCountryData, fetchCountryTotalData } from '../../api';
import { Line } from 'react-chartjs-2';
import styles from './Charts.module.css';
import { CircularProgress } from '@material-ui/core';

const Charts = ({ country }) => {
  const [countryData, setCountryData] = useState();

  useEffect(() => {
    const getCountryData = async () => {
      if (country !== 'Global') {
        const countryData = await fetchCountryData(country);
        console.log(countryData);
        setCountryData(countryData);
      } else {
        //const totalData = await fetchCountryTotalData();
      }
    };
    getCountryData();
  }, [country]);

  const lineChart = countryData ? (
    countryData.length ? (
      <Line
        data={{
          labels: countryData.map(({ Date }) => Date.replace('T00:00:00Z', '')),
          datasets: [
            {
              data: countryData.map(({ Confirmed }) => Confirmed),
              label: 'Infected',
              borderColor: '#3333ff',
              fill: true,
            },
            {
              data: countryData.map(({ Active }) => Active),
              label: 'Active',
              borderColor: 'rgba(129, 14, 230, 1)',
              fill: true,
            },
            {
              data: countryData.map(({ Deaths }) => Deaths),
              label: 'Deaths',
              borderColor: 'red',
              backgroundColor: 'rgba(255, 0, 0, 0.5)',
              fill: true,
            },
            {
              data: countryData.map(({ Recovered }) => Recovered),
              label: 'Recovered',
              borderColor: 'green',
              backgroundColor: 'rgba(0, 255, 0, 0.5)',
              fill: true,
            },
          ],
        }}
      />
    ) : (
      <div>
        <CircularProgress />
      </div>
    )
  ) : null;

  return <div className={styles.container}>{lineChart}</div>;
};

export default Charts;
