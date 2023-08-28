import React, { useEffect, useMemo, useState } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { Box, Button, TextField, Grid, Alert } from '@mui/material'
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { checkingAuthetication, startSignIn } from '../../store/auth';

export const LoginPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth)
  const dispatch = useDispatch();
  const { usuario, password, onInputChange} = useForm({ usuario: '', password: '' });
  const isAuthenticating = useMemo(() => status === 'checking', [status]);
 
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(usuario, password);
    dispatch( checkingAuthetication() );
    dispatch( startSignIn({name: usuario, password}) );
  }
 
  return (
    <AuthLayout>      
      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
        <Grid container>
          <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
            <TextField 
              label="Usuario"
              type="text"
              placeholder="Ej: rossmon"
              fullWidth   
              name="usuario"
              value={ usuario }
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

          <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
            <Grid item xs={12} sm={6}>
              <Button 
                disabled={ isAuthenticating }
                type="submit" 
                variant="contained" 
                fullWidth
              >   
                Login               
              </Button>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
            <Grid item xs={12} sm={12} display={ !!errorMessage ? '' : 'none' }>
              <Alert severity="error">{errorMessage}</Alert>                
            </Grid> 
          </Grid>
            
        </Grid>
      </form>
    </AuthLayout>
  )
}
