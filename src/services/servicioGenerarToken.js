//GENERAR UN TOKEN AUTOMATICO

//URI

const URI='https://accounts.spotify.com/api/token'

//DATOS DE ENVIO

const DATO1='grant_type=client_credentials' 
const DATO2='client_id=f350d94497a542e8afd1736ce422e361'
const DATO3='client_secret=455cb4e4a7664f49ac968d468beb29a1'
//PETICION

const PETICION= {
    method :"POST",
    headers : {},
    body:DATO1+"&"+DATO2+"&"+DATO3
}

//FETCH