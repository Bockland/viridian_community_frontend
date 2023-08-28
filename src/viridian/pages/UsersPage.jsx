import React, { useEffect } from 'react'
import { ViridianLayout } from '../layout/ViridianLayout'
import { Button } from '@mui/material'
import { TablaRegistros } from '../components/Table/TablaRegistros'
import { useUser } from '../../hooks/useUser'
import { columnsUser } from "../components/Table/columns/userColumns"
import { Formulario } from '../components/Formulario/Formulario'
import { useSelector } from 'react-redux'
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import { AppModal } from '../layout/AppModal'

export const UsersPage = () => {

  const { data, user, load } = useSelector(state => state.usuarios)

  const { obtener, actualizar } = useUser();

  useEffect(() => {
    obtener({})
  }, [load])

  return (
    <ViridianLayout>
        {
          (data == null) ? (<></>)
          : (
            <div className='animate__animated animate__fadeIn animate__faster'>
              <AppModal
                width = "50%"
                height = "70%"
                color = "success"
                icon = {<PersonAddAlt1OutlinedIcon />}
              >
                <Formulario                 
                  data = {null}
                  formActualizar = {false}  
                  formCrear = {true}              
                />
              </AppModal>            
              <div className='app-div-100'>
                <div className='app-div-70-left'>
                  <div className='app-div-centrado-90'>
                    <TablaRegistros
                      columns={columnsUser} 
                      data={data} 
                      toolbar={true}
                      pageSize={8}
                      rowsPerPage={[8, 20]}
                    />
                  </div>
                </div>
                <div className='app-div-30-right'>
                  <div className='app-div-centrado-90'>
                    {
                      (user == null) ? (<></>)
                      : (
                        <Formulario 
                          data={user}
                          formActualizar = {true}                          
                          formCrear = {false}
                        />
                      )
                    }                    
                  </div>
                </div>
              </div>
            </div>
          )
        }
    </ViridianLayout>
  )
}

