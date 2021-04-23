var searchParam = (new URL(window.location)).searchParams;
var id = searchParam.get("id");

furnitureManager.getById(id),
        {
            "method": "POST",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            "body": JSON.stringify({ basket: getBasketId() })
        }.then(data => data.json())
        .then( jsonFurniture => {
            let furniture = new Furniture(jsonFurniture);
                document.querySelector("#basket_content".innerHTML) += `<div class="row mb-3">
                                                                    <div class="col-6 m-auto">
                                                                        <div class="card shadow">
                                                                                <div class="card-header">
                                                                                    <h5 class="card-title">${furniture.name}</h5>
                                                                                    <p>${furniture.getFormatedPrice}</p>
                                                                                </div>
                                                                                    <img src="${furniture.imageUrl}" width="100%" height="200">
                                                                                <a href="../products/product_1.html" class="btn btn-primary stretched-link">Sélectionner article</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>`
;
            }


        });
;