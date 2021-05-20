var searchParam = (new URL(window.location)).searchParams;
var id = searchParam.get("id");

furnitureManager.getById(id)
    .then(data => data.json())
    .then( jsonFurniture => {
            let furniture = new Furniture(jsonFurniture);
            let option = "";
            for (let varnish of furniture.varnish) {
                option += `<option>${varnish}</option>`;
            }
            document.querySelector("#main_content").innerHTML += `<div class="row mb-3">
            <div class="col">
                <div class="card">
                    <div class="card-header d-flex justify-content-between">
                        <h5 class="card-title">${furniture.name}</h5>
                        <p>${furniture.getFormatedPrice()}</p>
                    </div>
                    <div class="card-body d-flex">
                        <img src="${furniture.imageUrl}" width="150" height="150" alt="Ours en peluche">
                        <p class="ml-3">${furniture.description}</p>
                    </div>
                    <div class="d-flex justify-content-between pb-3 pl-3 pr-3">
                            <select class="form-select" id="customisation" required>
                                <option selected disabled value="">Choisissez une option</option>
                                ${option}
                            </select>
                        <div>
                            <a href="../basket/basket.html" class="btn btn-secondary addBasket">Ajouter au panier</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>`;
        document.querySelector(".addBasket").addEventListener("click", function() {
                    let custom = document.querySelector("#customisation");
                    if (custom.reportValidity()){
                        furniture.customisation = document.querySelector("#customisation").value;
                        addBasket(furniture);
                    }
            })
    });