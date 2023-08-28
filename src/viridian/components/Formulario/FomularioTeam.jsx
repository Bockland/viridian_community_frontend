import React, { useEffect, useState } from 'react'
import { useForm } from '../../../hooks/useForm';
import { Alert, Button, Grid, Switch, TextField } from '@mui/material';
import { useTeam } from '../../../hooks/useTeam';

export const FomularioTeam = ({data, formActualizar, formCrear}) => {

    const { actualizar, crear } = useTeam();

    const { name, originalName, onInputChange, onNewDataForm, onResetForm} = useForm(
    { 
        name: (data) ? data.name : "",
        originalName: (data) ? data.originalName : ""            
    });

    useEffect(() => {
        onNewDataForm(data)
    }, [data])

    const onSubmit = (event) => {
        event.preventDefault();
        const team = { name, originalName }

        if(formActualizar) actualizar(team)   
        if(formCrear) {
            crear(team);
            onResetForm();   
        }
    }
    return (
        <div className="app-form-user">
            <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster app-form-centrado-90">
            <Grid container>

                <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
                    <TextField 
                        label="Nombre"
                        type="text"
                        placeholder="Ej: Fear o Chill"
                        fullWidth   
                        name="name"
                        value={ name }
                        onChange={ onInputChange }           
                    />
                </Grid>

                <Grid container spacing={4} sx={{mb: 2, mt: 1}}>
                    <Grid item xs={12} sm={12}>
                        <Button                         
                            type="submit" 
                            variant="contained" 
                            fullWidth={true}
                        >   
                            {(formActualizar) ? "Actualizar" : "Crear" }              
                        </Button>
                    </Grid>
                </Grid>                
            </Grid>
            </form>
        </div>
    )
}
