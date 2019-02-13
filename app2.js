class TripService {

    constructor() {
        
        // TODO Set of 3 trips
        //
        // new Trip('paris', 'Paris', 'img/paris.jpg')
        // new Trip('nantes', 'Nantes', 'img/nantes.jpg')
        // new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
    }

    findByName(tripName) {

         return new Promise((resolve, reject) => {

             setTimeout( () => {
                 // ici l'exécution du code est asynchrone

                 // TODO utiliser resolve et reject en fonction du résultat de la recherche

             }, 2000)
        });
    }
}

class PriceService {

    constructor() {
        // TODO Map of 2 trips
        // 'paris' --> price = 100
        // 'rio-de-janeiro' --> price = 800)
        // no price for 'nantes'
    }

    findPriceByTripId(tripId) {

       return new Promise((resolve, reject) => {

                    setTimeout( () => {
                        // ici l'exécution du code est asynchrone

                        // TODO utiliser resolve et reject en fonction du résultat de la recherche

                    }, 2000)
               });
    }
}