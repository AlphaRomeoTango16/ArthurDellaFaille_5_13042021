/* Gestion des articles en objet, gère le tri par nom.
*/

class FurnitureManager{
    constructor(listFurniture){
        this.listFurniture = listFurniture;
    }

    async getAll(){
        var config = await loadConfig();
        return fetch(config.host + config.data);
    }

    async getById(id){
        var config = await loadConfig();
        return fetch(config.host + config.data + "/"+id);
    }
}

var furnitureManager = new FurnitureManager();
