var searchParam = (new URL(window.location)).searchParams;
var id = searchParam.get("id");

var basket = getBasket();
        for (let product of basket) {
            let furniture = new Furniture(product);
                document.querySelector("#basket_content").innerHTML += `<tr>
                                                                        <th scope="col">${furniture.name}</th>
                                                                        <th scope="col">${furniture.getFormatedPrice()}</th>
                                                                        <th scope="col">${furniture.quantity}
                                                                        <span class="btn-group">
                                                                                <button type="button" class="btn btn-primary ml-3" id="addQt">+</button>
                                                                                <button type="button" class="btn btn-primary" id="removeQt">-</button>
                                                                        </span>
                                                                        </th>
                                                                        <th scope="col">${furniture.getTotalPrice()}</th>
                                                                        </tr>`;
                                                                        document.querySelector("#addQt").addEventListener("click", function() {
                                                                            addQt(furniture);
                                                                    });
                                                                    document.querySelector("#removeQt").addEventListener("click", function() {
                                                                            
                                                                    });
        };