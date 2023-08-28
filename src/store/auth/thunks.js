import { requestBackend } from "../../backend/requestBackend";
import { checkingCredentials, logout, login } from "./"

export const checkingAuthetication = () => {
    return async( dispatch ) => {
        dispatch ( checkingCredentials() );
    }
}

export const startSignIn = ({name, password}) => {
    return async( dispatch ) => {
        console.log(name, password)

        const request = { "query": { name, password } };

        const response = await requestBackend(request, 'POST', '/user/find'); 
        console.log(response)       
        const { statusCode, message } = response;

        if ( statusCode != 200 ) dispatch( logout({errorMessage: message}) );
        else {

            const { name, password, enable } = response.body[0];

            dispatch( login({
                username: name,
                displayName: name,
                password 
            }) );
            
            localStorage.setItem('user', JSON.stringify({
                username: name,
                displayName: name,
                password,
                errorMessage: null,
                status: 'authenticated'
            }));
            
        }
    }
}

export const startLogout = () => {
    return async( dispatch ) => {   
        localStorage.setItem('user', JSON.stringify(null));     
        dispatch( logout() );
    }
}