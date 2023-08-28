import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from "react-router-dom";
import { startSignIn } from '../../store/auth';
import { CheckingAuth } from '../../ui'

export const ValidationPage = () => {

  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  const dispatch = useDispatch();

  const onSesion = () => {
    dispatch( startSignIn({code}) );
  }

  useEffect(() => {
    onSesion();
  }, []);  

  return (
    <>
      <CheckingAuth />    
    </>
    
  )
}
