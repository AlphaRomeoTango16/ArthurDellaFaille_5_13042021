var searchParam = (new URL(window.location)).searchParams;
var id = searchParam.get("id");

var basket = getBasket();
        for (let product of basket) {
            let furniture = new Furniture(product);
                document.querySelector("#basket_content").innerHTML += `<tr>
                                                                        <th scope="col">${furniture.name}
                                                                        <a id="remove" role="button"><i class="bi bi-x"></i></a>
                                                                        </th>
                                                                        <th scope="col" class="price">${furniture.getFormatedPrice()}</th>
                                                                        <th>
                                                                        <a role="button" id="dec"><i class="bi bi-dash-circle-fill"></i></a>
                                                                        <input class="counter" value=${furniture.quantity} disabled>
                                                                        <a role="button" id="inc"><i class="bi bi-plus-circle-fill"></i></a>
                                                                        </th>
                                                                        <th scope="col">${furniture.getTotalPrice()}</th>
                                                                        </tr>`;
                                                                        document.querySelector("#remove").addEventListener("click", function (){
                                                                            remove(furniture);
                                                                        })
                                                                        document.querySelector("#dec").addEventListener("click", function (){
                                                                            decrease(furniture);
                                                                        })
                                                                        document.querySelector("#inc").addEventListener("click", function (){
                                                                            increase(furniture);
                                                                        })
        };