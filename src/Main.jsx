import React, { useState, useEffect } from 'react';
import { Cards, Charts, CountryPicker } from './components';
import styles from './Main.module.css';
import { fetchTotalData, fetchCountryData, fetchCountryTotalData } from './api';

const Main = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('Global');
  const [masterData, setMasterData] = useState([]);

  useEffect(() => {
    const getMasterData = async () => {
      const totalData = await fetchCountryTotalData();
      setMasterData(totalData);
    };
    getMasterData();
  }, []);

  useEffect(() => {
    if (masterData.length > 0) {
      const selectedCountry = country ? country : 'Global';
      const countryTotalData = masterData
        .filter((item) => item.Country === selectedCountry)
        .map((item) => {
          return {
            Confirmed: item.Confirmed,
            Deaths: item.Deaths,
            Recovered: item.Recovered,
          };
        });
      setData(
        countryTotalData.length > 0
          ? countryTotalData[0]
          : { Confirmed: 0, Deaths: 0, Recovered: 0 }
      );
    }
  }, [country, masterData]);

  const handleCountryChange = (e) => {
    //setCountry(e.target.value);
    setCountry(e.target.textContent);
  };

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker countryChanged={handleCountryChange} />
      <Charts country={country} />
    </div>
  );
};

export default Main;
