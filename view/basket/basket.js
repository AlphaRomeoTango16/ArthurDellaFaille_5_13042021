var searchParam = (new URL(window.location)).searchParams;
var id = searchParam.get("id");

furnitureManager.getAll(),
        {
            "method": "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            "body": JSON.stringify({ basket: getBasketId() })
        }.then(data => data.json())
        .the( jsonFurniture =>{
            let furniture = new Furniture(jsonFurniture);
                document.querySelector("#basket_content".innerHTML) += `<div class="row mb-3">
                                                                            <div class="col-6 m-auto">
                                                                                <div class="card-shadow">
                                                                                    <div class="card-header">
                                                                                        <h5 class="card-title">${furniture.name}</h5>
                                                                                        <p>${furniture.getFormatedPrice}</p>
                                                                                        <label for="q">Quantité :</label>
                                                                                        <select id="qt" name="q">
                                                                                            <option value="1">1</option>
                                                                                            <option value="2">2</option>
                                                                                            <option value="3">3</option>
                                                                                            <option value="4">4</option>
                                                                                            <option value="5">5</option>
                                                                                            <option value="6">6</option>
                                                                                            <option value="7">7</option>
                                                                                            <option value="8">8</option>
                                                                                            <option value="9">9</option>
                                                                                            <option value="10">10</option>
                                                                                        </select>
                                                                                        <button type="button" class="add-to-cart" data-id="${furniture._id}></button>
                                                                                    </div>
                                                                                        <img src="${furniture.imageUrl}" width="100%" height="200">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>`
        });