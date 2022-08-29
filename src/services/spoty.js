import {URI,PETICION} from '../helpers/datosPeticionGET.js'

fetch(URI,PETICION)
.then(function(respuesta){

    return respuesta.json()

})
.then(function(respuesta){
    let fila =document.getElementById('fila')

    console.log(respuesta)
    console.log(respuesta.tracks)
    console.log(respuesta.tracks[0])
    


    console.log(respuesta.tracks[0].name)
    console.log(respuesta.tracks[0].preview_url)
    console.log(respuesta.tracks[0].popularity)
    console.log(respuesta.tracks[0].album.images[0].url)
})
.catch(function(respuestaError){
    console.log(respuestaError)
})