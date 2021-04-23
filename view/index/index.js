furnitureManager.getAll()
    .then(data => data.json())
    .then( jsonListFurniture => {
        for(let jsonFurniture of jsonListFurniture){
            let furniture = new Furniture(jsonFurniture);
            document.querySelector("#main_content").innerHTML += `<div class="row mb-3">
                                                                    <div class="col-8 m-auto">
                                                                        <div class="card shadow">
                                                                                <div class="card-header d-flex justify-content-between">
                                                                                    <h5 class="card-title">${furniture.name}</h5>
                                                                                    <p>${furniture.getFormatedPrice()}</p>
                                                                                </div>
                                                                                <div class="card-img">
                                                                                    <img src="${furniture.imageUrl}" object-fit="cover" width="100%" height="300vh">
                                                                                </div>
                                                                                <a href="../products/product.html?id=${furniture._id}" class="btn btn-primary stretched-link">Sélectionner article</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>`
        }
    });