/* Représentation du format d'un article ainsi que le formatage des données pour l'affichage
*/

class Article{
    constructor(jsonArticle){
        jsonArticle && Object.assign(this, jsonArticle);
    }

    getFormatedPrice(furnitures){
        let formatter = new Intl.NumberFormat('fr-FR', {
            style: 'currency',
            currency: 'EUR',
        });
        return price.formatter();
    }
}