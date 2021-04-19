/* Représentation du format d'un article ainsi que le formatage des données pour l'affichage
*/

class Furniture{
    constructor(jsonFurniture){
        jsonFurniture && Object.assign(this, jsonFurniture);
    }

    getFormatedPrice(furniture){
        let formatter = new Intl.NumberFormat('fr-FR', {
            style: 'currency',
            currency: 'EUR',
        });
        let price = formatter.format(price);
    }
}