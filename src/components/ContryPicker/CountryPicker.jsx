import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'

import styles from './CountryPicker.module.css'
import { fetchCountryData } from '../../api'

const CountryPicker = (props) => {
  const [countryDataStatus, setCountryDataStatus] = useState([])

  useEffect(() => {
    const fetchedCountryData = async () => {
      setCountryDataStatus(await fetchCountryData())
    }
    fetchedCountryData()
  }, [setCountryDataStatus])

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => props.handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {countryDataStatus.map((country, i) => {
          return (
            <option key={i} value={country}>
              {country}
            </option>
          )
        })}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker
