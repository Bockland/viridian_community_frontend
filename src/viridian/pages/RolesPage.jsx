import React, { useEffect } from 'react'
import { ViridianLayout } from '../layout/ViridianLayout'
import { useRole } from '../../hooks/useRole';
import { AppModal } from '../layout/AppModal';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { useSelector } from 'react-redux';
import { TablaRegistros } from '../components/Table/TablaRegistros';
import { columnsRole } from '../components/Table/columns/roleColumns';
import { FomularioRoles } from '../components/Formulario/FomularioRoles';

export const RolesPage = () => {

    const { roles, rol } = useSelector(state => state.roles)
    const { obtener } = useRole();

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
                    <FomularioRoles                 
                        data = {null}
                        formActualizar = {false}  
                        formCrear = {true}              
                    />
                </AppModal>
            {
                (roles == null) ? (<></>)
                : (
                    <div className='app-div-100'>
                        <div className='app-div-60-left'>
                            <div className='app-div-centrado-90'>
                                <TablaRegistros
                                columns={columnsRole} 
                                data={roles} 
                                toolbar={true}
                                pageSize={8}
                                rowsPerPage={[8, 20]}
                                />
                            </div>
                        </div>
                        <div className='app-div-40-right'>
                            <div className='app-div-centrado-90'>
                                {
                                (rol == null) ? (<></>)
                                : (
                                    <FomularioRoles
                                        data={rol}
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
