import { Button } from '@mui/material'
import React from 'react'

export const TableButton = ({data, action, icon, color, size, style}) => {
    return (
        <Button
            variant={style}
            size={size}
            color={color}
            onClick={() => { (data) ? action(data) : action() }}
        >
          {icon}
        </Button>
      )
}
