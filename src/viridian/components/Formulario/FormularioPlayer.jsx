import React, { useEffect } from 'react'
import { usePlayer } from '../../../hooks/usePlayer';
import { useForm } from '../../../hooks/useForm';
import { Button, Grid, MenuItem, Select, TextField } from '@mui/material';
import { SelectFlags } from './Inputs/SelectFlags';

export const FormularioPlayer = ({data, formActualizar, formCrear}) => {

    const { equiposLitado, actualizar, crear } = usePlayer();

    const { name, originalName, team, idunite, country, 
        onInputChange, onNewDataForm, onResetForm} = useForm(
    { 
        name: (data) ? data.name : "",
        originalName: (data) ? data.originalName : "",
        team: (data) ? data.team : "",
        idunite: (data) ? data.idunite : "",
        country: (data) ? data.country : "",  
    });

    useEffect(() => {
        onNewDataForm(data)
    }, [data])

    const onSubmit = (event) => {
        event.preventDefault();
        const player = { name, originalName, team, idunite, country }

        if(formActualizar) actualizar(player)   
        if(formCrear) {
            crear(player);
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
                            label="Nombre"
                            type="text"
                            placeholder="Ej: "
                            fullWidth   
                            name="name"
                            value={ name }
                            onChange={ onInputChange }           
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
                        <TextField 
                            label="Id Unite"
                            type="text"
                            placeholder="Ej: TvF・Gelfas"
                            fullWidth   
                            name="idunite"
                            value={ idunite }
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
                                    return ( <MenuItem key={element.name} value={element.name}>{element.name}</MenuItem> )                      
                                })
                            }                        
                        </Select>
                    </Grid>

                    <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
                        <SelectFlags 
                            labelId="country-select"
                            id="country-select"
                            name="country"
                            value={country}
                            label="Pais"
                            onChangeFunction={onInputChange}
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
