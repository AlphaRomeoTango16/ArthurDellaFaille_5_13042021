/* Gestion du panier, enregistrement d'un produits dans le panier, retrait d'un article dans le panier.
*/

function addBasket(furnituresId){
    let basket = getBasket();
    basket.push(furnituresId);
    saveBasket(basket);
}

function getBasket(){
    let basket = localStorage.getItem("basket");
    if(basket == null){
        return [];
    }else{
        return JSON.parse(basket);
    }
}

function saveBasket(basket){
    localStorage.setItem("basket", JSON.stringfy(basket));
}