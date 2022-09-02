export function generarURI(ID_ARTISTA){

  let uri =`https://api.spotify.com/v1/artists/${ID_ARTISTA}/top-tracks?market=us`
  return uri
}