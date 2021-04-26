/* Gestion du panier, enregistrement d'un produits dans le panier, retrait d'un article dans le panier.
*/

function addBasket(furniture){
    let basket = getBasket();
    let productFound = basket.find(product => product.id == furniture.id);
    if (productFound != undefined) {
        productFound.quantity++;
    }else {
        furniture.quantity = 1;
        basket.push(furniture);
    }
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

function getBasketId(){
    return getBasket().map(basket => basket.id)
}

function saveBasket(basket){
    localStorage.setItem("basket",JSON.stringify(basket));
}