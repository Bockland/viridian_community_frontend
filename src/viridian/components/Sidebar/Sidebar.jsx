import React from 'react'
import './style.css'
import { SidebarData } from './SidebarData'
import { Box } from '@mui/material'
import LogoNav from './ui/logo_nav.png'

export const Sidebar = () => {
  return (
    <div className='sidebar-main'>
        <br></br>
        <div className='logo'>
            <Box
                component="img"    
                alignItems="center"
                justifyContent="center" 
                style={{
                  width:'50%',
                  marginLeft: '25%',
                  marginRight: '25%',
                }}         
                
                src={LogoNav}
            />       
        </div>
        <br></br>
        <ul className='sidebar-list'>
        {
            SidebarData.map((val, key) => {
                return (
                <li 
                    key={key} 
                    className='sidebar-row'
                    id={window.location.pathname == val.link ? "active" : ""}
                    onClick={() => { window.location.pathname = val.link }}
                >
                    <div id="icon">{val.icon}</div>
                    <div id="title">{val.title}</div>
                </li>
                )
            })
        }
        </ul>
    </div>
  )
}
