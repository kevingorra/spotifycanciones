//consuminedo apis

//1. pa donde voy 

const URI = "https://api.spotify.com/v1/artists/3NgwMzys77S7sgfh2W5k0V/top-tracks?market=us"

// 2. configurar la peticion

const PETICION={
    method :"GET",
    headers:{
        Authorization:"Bearer BQBrIERCdLGfR_gFOFvFVhYUYeGuC_3Jar3POZ3QlUGK6ozoC7tMOCm4kds5NNrkHV2PqPjIh_9FHU9esE9YQHArAVLa9XgPcwhttOg_jLVPK76RBhpJ_QJRCri_-w2M3oBajV0ZH7MV80RcsMAaTl_MQB7Xl9aMsu9an_mGQyoPMpgekFDdt6exCJEGo65uAaM"
    }
}

//3. consumo la api

fetch(URI,PETICION)
.then(function(respuesta){

    return respuesta.json()

})
.then(function(respuesta){
    let fila =document.getElementById('fila')

    console.log(respuesta)
    console.log(respuesta.tracks)
    console.log(respuesta.tracks[0])
    

    respuesta.tracks.forEach(function(cancion){
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.popularity)
        console.log(cancion.album.images[0].url)

        let columna=document.createElement('div')
        columna.classList.add('col')

        let tarjeta=document.createElement('div')
        tarjeta.classList.add('card','shadow','p-3','h-100')

        let audio=document.createElement('audio')
        audio.classList.add('w-100')
        audio.src=cancion.preview_url
        audio.setAttribute('controls','controls')

        let nombre =document.createElement('h3')
        nombre.classList.add('text-center')
        nombre.textContent=cancion.name

        let imagen =document.createElement('img')
        imagen.classList.add('img-fluid','w-100','my-5')
        imagen.src=cancion.album.images[1].url

        tarjeta.appendChild(nombre)
        tarjeta.appendChild(audio)
        tarjeta.appendChild(imagen)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)



   

    })
    console.log(respuesta.tracks[0].name)
    console.log(respuesta.tracks[0].preview_url)
    console.log(respuesta.tracks[0].popularity)
    console.log(respuesta.tracks[0].album.images[0].url)
})
.catch(function(respuestaError){
    console.log(respuestaError)
})