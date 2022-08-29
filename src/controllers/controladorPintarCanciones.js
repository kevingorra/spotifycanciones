function pintarcanciones(canciones){

    canciones.tracks.forEach(function(cancion){
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


}