import React, { useEffect } from 'react'
import { ViridianLayout } from '../layout/ViridianLayout'
import { AppModal } from '../layout/AppModal';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { useSelector } from 'react-redux';
import { TablaRegistros } from '../components/Table/TablaRegistros';
import { usePlayer } from '../../hooks/usePlayer';
import { FormularioPlayer } from '../components/Formulario/FormularioPlayer';
import { columnsPlayer } from '../components/Table/columns/playerColumns';

export const PlayerPage = () => {

  const { players, player } = useSelector(state => state.players)
  const { obtener } = usePlayer();

  useEffect(() => {
    obtener({})
  }, [])

  return (
    <ViridianLayout>
      <div className='animate__animated animate__fadeIn animate__faster'>
        <AppModal
          width = "50%"
          height = "90%"
          color = "success"
          icon = {<AddBoxOutlinedIcon />}
        >
          <FormularioPlayer 
            data = {null}
            formActualizar = {false}  
            formCrear = {true}  
          />         
        </AppModal>
        {
          <div className='app-div-100'>
            <div className='app-div-70-left'>
              <div className='app-div-centrado-90'>
                <TablaRegistros
                  columns={columnsPlayer} 
                  data={players} 
                  toolbar={true}
                  pageSize={8}
                  rowsPerPage={[8, 20]}
                />
              </div>
            </div>
            <div className='app-div-30-right'>
              <div className='app-div-centrado-90'>
              {
                (player == null) ? (<></>)
                : (
                  <FormularioPlayer 
                    data={player}
                    formActualizar = {true}                          
                    formCrear = {false}
                  />
                )
              }                    
              </div>
            </div>
          </div>
        }
      </div>
    </ViridianLayout>
  )
}
