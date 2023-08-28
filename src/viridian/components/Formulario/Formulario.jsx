import React, { useEffect, useState } from 'react'
import { useForm } from '../../../hooks/useForm';
import { Alert, Button, Grid, MenuItem, Select, Switch, TextField } from '@mui/material';
import { useSelector } from 'react-redux';
import { useUser } from '../../../hooks/useUser';
import CheckCircleOutlined from '@mui/icons-material/CheckCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';

export const Formulario = ({data, formActualizar, formCrear}) => {

    const { equiposLitado, rolesLitado, actualizar, crear } = useUser();

    const { name, password, enable, team, rol, _id, onInputChange, onNewDataForm, onResetForm} = useForm(
    { 
        name: (data) ? data.name : "", 
        password: (data) ? data.password: "", 
        enable:  (data) ? data.enable: false,
        _id: (data) ? data._id : "",
        team: (data) ? data.team : "",
        rol: (data) ? data.rol : "",
    });

    useEffect(() => {
        onNewDataForm(data)
    }, [data])

    const onSubmit = (event) => {
        event.preventDefault();
        const user = {name, password, enable, team, rol}

        console.log(user)

        if(formActualizar) actualizar(user)   
        if(formCrear) {
            crear(user);
            onResetForm();   
        }
    }

    if ( equiposLitado == null ) return (<></>)
    else return (
        <div className="app-form-user">
            <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster app-form-centrado-90">
            <Grid container>

                <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
                    <TextField 
                        label="Usuario"
                        type="text"
                        placeholder="Ej: rossmon"
                        fullWidth   
                        name="name"
                        value={ name }
                        onChange={ onInputChange }           
                    />
                </Grid>

                <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
                    <TextField 
                        label="Contraseña"
                        type="password"
                        placeholder=""
                        fullWidth     
                        name="password"
                        
                        value={ password }
                        onChange={ onInputChange }         
                    />
                </Grid>

                <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
                    <Select
                        labelId="equipo-select"
                        id="equipo-select"
                        name="team"
                        value={team}
                        label="Equipo"
                        fullWidth
                        onChange={ onInputChange }
                    >
                        {
                            equiposLitado.map(element => {
                                return ( <MenuItem value={element.name}>{element.name}</MenuItem> )                      
                            })
                        }                        
                    </Select>
                </Grid>

                <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
                    <Select
                        labelId="rol-select"
                        id="rol-select"
                        name="rol"
                        value={rol}
                        label="Rol"
                        fullWidth
                        onChange={ onInputChange }
                    >
                        {
                            rolesLitado.map(element => {
                                return ( <MenuItem value={element.name}>{element.name}</MenuItem> )                      
                            })
                        }                        
                    </Select>
                </Grid>

                <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
                    <Button
                        variant="contained" 
                        color={(enable) ? "success" : "error"}
                        fullWidth={true}
                        onClick={() => {
                            const target = { name: "enable" ,value: !enable }
                            onInputChange({target})
                        }}
                    >
                        {
                        (enable) ? 
                        <CheckCircleOutlined /> 
                        : <RemoveCircleOutlinedIcon />
                        }
                    </Button>
                </Grid>

                <Grid container spacing={4} sx={{mb: 2, mt: 1}}>
                    <Grid item xs={12} sm={12}>
                        <Button                         
                            type="submit" 
                            variant="contained" 
                            fullWidth={true}
                        >   
                            Actualizar               
                        </Button>
                    </Grid>
                </Grid>

                
            </Grid>
            </form>
        </div>
    )
}
