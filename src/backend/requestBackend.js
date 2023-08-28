
export const requestBackend = async (request, method, endpoint, error = null) => {

    const url = import.meta.env.VITE_URL_BACKEND;

    var bRequest = JSON.stringify(request, null, 2);

    var respuesta = await fetch(url + endpoint, {
        method: method,
        body: bRequest,
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json', 
        }       
    });

    var response = await respuesta.json();

    if(respuesta.status === 200) return response;    
    else return {statusCode: 400, message: error || response.message};
}