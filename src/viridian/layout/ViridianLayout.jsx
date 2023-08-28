import React from 'react'
import { Sidebar } from '../components'

export const ViridianLayout = ({children}) => {
  return (
    <div className='app'>
      <div className='app-sidebar'>
        <Sidebar />
      </div>
      
      <div className='app-contenido'> 
        {children}
      </div>
     
    </div>
  )
}
