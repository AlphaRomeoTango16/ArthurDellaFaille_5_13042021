/* Gestion des articles en objet.
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

    async postBasket(contact, listProduct){
        var config = await loadConfig();
        return fetch(config.host + config.data +"/order",{
            method: "POST",
            body: JSON.stringify({
                contact: contact,
                products: listProduct
            }),
            headers: {
                "Content-Type":"application/json"
            }
        });
    }
}

var furnitureManager = new FurnitureManager();
