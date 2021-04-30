var searchParam = (new URL(window.location)).searchParams;
var id = searchParam.get("id");

var basket = getBasket();
        for (let product of basket) {
            let furniture = new Furniture(product);
                document.querySelector("#basket_content").innerHTML += `<tr>
                                                                        <th scope="col">${furniture.name}
                                                                        <a id="remove"><i class="bi bi-x"></i></a>
                                                                        </th>
                                                                        <th scope="col">${furniture.getFormatedPrice()}</th>
                                                                        <th>
                                                                        <button type="button" class="btn btn-primary">-</button>
                                                                        <input class="counter" value=${furniture.quantity} disabled>
                                                                        <button type="button" class="btn btn-primary">+</button>
                                                                        </th>
                                                                        <th scope="col">${furniture.getTotalPrice()}</th>
                                                                        </tr>`;
        };