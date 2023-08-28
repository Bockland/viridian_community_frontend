import { MenuItem, Select } from '@mui/material'
import React from 'react'
import ReactCountryFlag from 'react-country-flag'

export const SelectFlags = ({value, id, name, onChangeFunction, label}) => {
  return (
    <Select
        labelId={id}
        id={id}
        name={name}
        value={value}
        label={label}
        fullWidth
        onChange={ onChangeFunction }
    >
        <MenuItem key={"Chile"} value={"Chile"}><ReactCountryFlag countryCode="US" /> </MenuItem> 
        <MenuItem key={"Peru"} value={"Peru"}>{"Peru"}</MenuItem> 
        <MenuItem key={"Argentina"} value={"Argentina"}>{"Argentina"}</MenuItem> 
        <MenuItem key={"Colombia"} value={"Colombia"}>{"Colombia"}</MenuItem> 
        <MenuItem key={"Venezuela"} value={"Venezuela"}>{"Venezuela"}</MenuItem> 
        <MenuItem key={"Uruguay"} value={"Uruguay"}>{"Uruguay"}</MenuItem>
        <MenuItem key={"Mexico"} value={"Mexico"}>{"Mexico"}</MenuItem>
    </Select>
  )
}
