import { AppBar, Toolbar, Button, IconButton, Box, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../store/auth';

export const Navbar = () => {

  const { displayName } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const onlogout = () => {
    dispatch( startLogout() );
  }

  return (
    <div className='navbar-app'>   
      
    </div>
  )
}
