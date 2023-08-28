import { Button } from '@mui/material'
import React from 'react'
import { useUser } from '../../../../hooks/useUser'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export const SelectUser = ({data}) => {

  const { seleccionar } = useUser()

  return (
    <Button
        variant="contained"
        size="small"
        color="secondary"
        onClick={() => {seleccionar(data)}}
    >
      <EditOutlinedIcon />
    </Button>
  )
}
