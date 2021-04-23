var searchParam = (new URL(window.location)).searchParams;
var id = searchParam.get("id");

furnitureManager.getById(id)
    .then(data => data.json())
    .then( jsonFurniture => {
            let furniture = new Furniture(jsonFurniture);
            document.querySelector("#main_content").innerHTML += `<div class="row mb-3">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${furniture.name}</h5>
                        <p>${furniture.getFormatedPrice()}</p>
                        <img src="${furniture.imageUrl}" width="150" height="150" alt="Ours en peluche">
                        <p>${furniture.description}</p>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle mb-2" type="button" id="dropdownCustomization" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Vernis
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownCustomization">
                                <a class="dropdown-item">${furniture.varnish[0]}</a>
                                <a class="dropdown-item">${furniture.varnish[1]}</a>
                                <a class="dropdown-item">${furniture.varnish[2]}</a>
                                <a class="dropdown-item">${furniture.varnish[3]}</a>
                            </div>
                        </div>
                        <a href="#" class="btn btn-secondary addBasket" data-id=${furniture._id}>Ajouter au panier</a>
                        <a href="#" class="btn btn-primary">Acheter cet article</a>
                    </div>
                </div>
            </div>
        </div>`
        document.querySelectorAll(".addBasket").forEach(btn => {
            btn.addEventListener("click", function() {
                if (this.className.indexOf("activated") != -1) {
                    this.setAttribute("class", "btn btn-secondary addBasket");
                    this.innerHTML = "Ajouter au panier";
                    removeBasket(this.dataset.id);
                } else {
                    this.setAttribute("class", "btn btn-secondary addBasket activated");
                    this.innerHTML = "Retirer du panier";
                    addBasket(this.dataset.id);
                }
                
            })
        })
    });