import React, { useEffect } from 'react'
import { ViridianLayout } from '../layout/ViridianLayout'
import { useTeam } from '../../hooks/useTeam';
import { AppModal } from '../layout/AppModal';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { useSelector } from 'react-redux';
import { TablaRegistros } from '../components/Table/TablaRegistros';
import { FomularioTeam } from '../components/Formulario/FomularioTeam';
import { columnsTeam } from '../components/Table/columns/teamColumns';

export const TeamsPage = () => {

  const { teams, team } = useSelector(state => state.teams)
  const { obtener } = useTeam();

  useEffect(() => {
    obtener({})
  }, [])

  return (
    <ViridianLayout>
      <div className='animate__animated animate__fadeIn animate__faster'>
        <AppModal
          width = "50%"
          height = "50%"
          color = "success"
          icon = {<AddBoxOutlinedIcon />}
        >
          <FomularioTeam
            data = {null}
            formActualizar = {false}  
            formCrear = {true}   
          />
        </AppModal>
        {
          (teams == null) ? (<></>)
          : (
            <div className='app-div-100'>
              <div className='app-div-60-left'>
                <div className='app-div-centrado-90'>
                  <TablaRegistros
                    columns={columnsTeam} 
                    data={teams} 
                    toolbar={true}
                    pageSize={8}
                    rowsPerPage={[8, 20]}
                  />
                </div>
              </div>
              <div className='app-div-40-right'>
                <div className='app-div-centrado-90'>
                {
                  (team == null) ? (<></>)
                  : (
                    <FomularioTeam
                      data={team}
                      formActualizar = {true}                          
                      formCrear = {false}
                    />
                  )
                }                    
                </div>
              </div>
            </div>
          )
        }
      </div>
    </ViridianLayout>
  )
}
