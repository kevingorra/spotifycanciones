import {generarURI} from "../helpers/generaruri.js"
import {PETICION} from "../helpers/datosPeticionGET.js"
import {consultarCanciones} from "../services/servicioConsultarCanciones.js"
import {pintarcanciones} from "../controllers/controladorPintarCanciones.js"

let botonArtista = document.getElementById('botonBuscar')

botonArtista.addEventListener('click',function(evento){
    let artista=document.getElementById('artista')
    const URI = generarURI(artista.value)
    ativarServicio()
    async function ativarServicio(){
    let canciones = await consultarCanciones(URI,PETICION)
    pintarcanciones(canciones)
   }
})