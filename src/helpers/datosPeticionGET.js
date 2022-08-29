const ID_ARTISTA="3JCyEziWwDZksR1WY8EckM"

export const URI =`https://api.spotify.com/v1/artists/${ID_ARTISTA}/top-tracks?market=us`

const TOKEN ="Bearer BQBFokPrIjPldIxSpCFlwS3ZT2RQ8Z7BVlKvIgN31iA-brsO6r96XKieAUuei1UHuRNXqDj7xGcJHktV_oRtpyE9J8MpjP4fj2NYh9bHURr7Ahk3NQgJnr_nqNfsgvgoSAf7-MjRuLGslVPjZheoPPrtk5QaDL1v18AJBu9m-AzivvSLIz2_GOqaOLxrhTLEcq0"



export const PETICION={
    method :"GET",
    headers:{
        Authorization:TOKEN
    }
}