var searchParam = (new URL(window.location)).searchParams;
var id = searchParam.get("id");

var basket = getBasket();
        for (let product of basket) {
            let furniture = new Furniture(product);
                document.querySelector("#basket_content").innerHTML += `<table class="table">
                                                                            <thead class="thead-dark">
                                                                                <tr><th>Article</th><th>Prix unitaire</th><th>Quantité</th><th>Prix total</th></tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                <th scope="col">${furniture.name}</th>
                                                                                <th scope="col">${furniture.getFormatedPrice()}</th>
                                                                                <th scope="col">${furniture.quantity}
                                                                                <span class="btn-group">
                                                                                    <button type="button" class="btn btn-primary ml-3" id="add">+</button>
                                                                                    <button type="button" class="btn btn-primary" id="remove">-</button>
                                                                                </span>
                                                                                </th>
                                                                                <th scope="col">Prix total</th>
                                                                                </tr>
                                                                                <tr class="table-secondary">
                                                                                <th scope="row" colspan="3">Total</th>
                                                                                <td>Prix</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>`;
                                                                        document.querySelector("#add").addEventListener("click", function() {
                                                                            addBasket(furniture);
                                                                    });
                                                                    document.querySelector("#remove").addEventListener("click", function() {
                                                                            
                                                                    });
        };