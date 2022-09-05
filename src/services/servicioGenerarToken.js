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
    headers : {
        'content-type': "application/x-www-form-urlencoded"

    },
    body:DATO1+"&"+DATO2+"&"+DATO3
}

//FETCH

fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
})
.catch(function(respuesta){
    console.log(respuesta)
})

async function obtenerToken(){
    let respuesta =await fetch(URI,PETICION)
    return await respuesta.json()
}
console.log(await obtenerToken())