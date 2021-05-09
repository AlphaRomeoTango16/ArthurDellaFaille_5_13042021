/* Gestion du panier, enregistrement d'un produits dans le panier, retrait d'un article dans le panier.
*/

function addBasket(furniture){
    let basket = getBasket();
    let productFound = basket.find(product => product._id == furniture._id && product.customisation == furniture.customisation);
    if (productFound != undefined) {
        productFound.quantity++;
    }else {
        furniture.quantity = 1;
        basket.push(furniture);
        productFound = furniture;
    }
    saveBasket(basket);
    return productFound;
}

function remove(furniture){
    let basket = getBasket();
    basket = basket.filter(product => product._id != furniture._id || product.customisation != furniture.customisation);
    saveBasket(basket);
}

function decrease(furniture){
    let basket = getBasket();
    let productFound = basket.find(product => product._id == furniture._id && product.customisation == furniture.customisation);
    productFound.quantity--;
    saveBasket(basket);
    return productFound;
}

function getTotalAmount(){
    let basket = getBasket();
    var total = 0;
    basket.forEach(product => {
        let furniture = new Furniture(product);
        total += furniture.getTotalPrice();
    });
    return total;
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