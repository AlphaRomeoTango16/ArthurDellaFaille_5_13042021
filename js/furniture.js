/* Représentation du format d'un article ainsi que le formatage des données pour l'affichage
*/

class Furniture{
    constructor(jsonFurniture){
        jsonFurniture && Object.assign(this, jsonFurniture);
    }

    getFormatedPrice(){
        return (this.price/100).toFixed(2)+" €";
    }

    getVarnish(){
        if (this.varnish.value == "undefined") {
            return varnish.style.display = "none";
        } else {
            return varnish.style.display = "inline";
        }
    }
}