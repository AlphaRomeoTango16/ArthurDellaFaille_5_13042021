/* Représentation du format d'un article ainsi que le formatage des données pour l'affichage
*/

class Furniture{
    constructor(jsonFurniture){
        jsonFurniture && Object.assign(this, jsonFurniture);
    }

    getFormatedPrice(){
        return (this.price/100).toFixed(2)+" €";
    }

    getCustomization(){
        if (this.varnish.value == "undefined") {
            varnish.style.display = "none";
        } else {
            varnish.style.display = "inline";
        }
    }
}