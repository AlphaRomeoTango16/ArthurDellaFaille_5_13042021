/* Gestion du panier, enregistrement d'un produits dans le panier, retrait d'un article dans le panier.
*/

function addBasket(furnituresId){
    let listBasket = getBasket();
    listBasket.push(furnituresId);
    saveBasket(listBasket);
}

fonction getBasket(){
    let listBasket = localStorage.getItem("listBasket")
    if(listBasket == null){
        return [];
    }else{
        return JSON.parse(listBasket);
    }
}

function saveBasket(listBasket){
    localStorage.setItem("listBasket", JSON.stringfy(listBasket));
}