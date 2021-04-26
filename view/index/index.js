furnitureManager.getAll()
    .then(data => data.json())
    .then( jsonListFurniture => {
        for(let jsonFurniture of jsonListFurniture){
            let furniture = new Furniture(jsonFurniture);
            document.querySelector("#main_content").innerHTML += `<div class="card shadow mb-3" style="width: 30rem;">
                                                                                <div class="card-header d-flex justify-content-between">
                                                                                    <h5 class="card-title">${furniture.name}</h5>
                                                                                    <p>${furniture.getFormatedPrice()}</p>
                                                                                </div>
                                                                                <div class="card-img">
                                                                                    <img src="${furniture.imageUrl}" class="w-100 h-100">
                                                                                </div>
                                                                                <a href="../products/product.html?id=${furniture._id}" class="btn btn-primary stretched-link">Sélectionner article</a>
                                                                            </div>
                                                                        </div>`
        }
    });