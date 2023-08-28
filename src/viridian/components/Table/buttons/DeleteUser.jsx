import { Button } from '@mui/material'
import React from 'react'
import { useUser } from '../../../../hooks/useUser'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export const DeleteUser = ({data}) => {

    const { eliminar } = useUser()

    return (
      <Button
          variant="contained"
          size="small"
          color="error"
          onClick={() => {eliminar(data)}}
      >
        <DeleteOutlineOutlinedIcon />
      </Button>
    )
}
