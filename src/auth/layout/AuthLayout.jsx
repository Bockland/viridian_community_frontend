import { Grid, Box } from "@mui/material"
import Images from '../../ui/img'

export const AuthLayout = ({children}) => {
  return (
    <Grid       
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: '#e4e8fc', padding: 0 }}
    >
        <Grid 
            item
            className="box-shadow animate__animated animate__fadeIn"
            xs={3}
            sx={{ 
                width: {md: "50%"},
                backgroundColor: 'white', padding: 5, borderRadius: 2
            }}
        >
            <Box
                component="img"    
                alignItems="center"
                justifyContent="center" 
                style={{
                  width:'40%',
                  marginLeft: '30%',
                  marginRight: '30%',
                }}         
                
                src={Images.LogoFear}
            >              
            </Box>

            {children}


        </Grid>
    </Grid>
  )
}
