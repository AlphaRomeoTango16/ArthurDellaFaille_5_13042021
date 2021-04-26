var searchParam = (new URL(window.location)).searchParams;
var id = searchParam.get("id");

var basket = getBasket();
        for (let product of basket) {
            let furniture = new Furniture(product);
                document.querySelector("#basket_content").innerHTML += `<table class="table">
                                                                            <thead>
                                                                                <tr><th>Article</th><th>Prix unitaire</th><th>Quantité</th><th>Prix total</th></tr>
                                                                                <tr><th>${furniture.name}</th>
                                                                                <th>${furniture.getFormatedPrice()}</th>
                                                                                <th>${furniture.quantity}
                                                                                    <button type="button" class="btn btn-primary ml-3">+</button>
                                                                                    <button type="button" class="btn btn-primary ml-3">-</button>
                                                                                </th>
                                                                                <th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody id="cart-tablebody"></tbody>
                                                                        </table>
                                                                        <p>Sous total : <span class="subtotal"></span>€</p>`
        };