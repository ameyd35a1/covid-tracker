import React, { useState, useEffect } from 'react';
import { FormControl, NativeSelect, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { fetchCountries } from '../../api';
import styles from './CountryPicker.module.css';

const CountryPicker = ({ countryChanged }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const countries = await fetchCountries();
      countries.push('Global');
      setCountries(countries);
    };
    getCountries();
  }, []);

  return (
    <div className={styles.container}>
      {/* <FormControl>
        <NativeSelect onChange={countryChanged}>
          <option value="Global">Global</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl> */}
      <Autocomplete
        id="country-select-demo"
        style={{ width: 300 }}
        options={countries}
        autoHighlight
        getOptionLabel={(option) => option}
        onChange={countryChanged}
        renderInput={(params) => (
          <TextField {...params} label="Choose a country" variant="outlined" />
        )}
      />
    </div>
  );
};

export default CountryPicker;
