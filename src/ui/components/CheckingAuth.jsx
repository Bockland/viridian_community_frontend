import Lottie from "lottie-react";
import LoadingCarga from "../img/loadingCarga.json";

export const CheckingAuth = () => {
  return (
    <Lottie 
      animationData={LoadingCarga} 
      style={{
        maxWidth: '50%',
        margin: 'auto'        
      }}
    />
  )
}
