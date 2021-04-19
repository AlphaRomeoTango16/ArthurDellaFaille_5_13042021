fetch("http://localhost:3000/api/furniture")
    .then(data => data.json())
    .then( jsonListFurniture => {
        for(let jsonFurniture of jsonListFurniture){
            let furniture = new Furniture(jsonFurniture);
            document.querySelector("#main_content").innerHTML += `<div class="row mb-3">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${furniture.name}</h5>
                        <p>${furniture.price}</p>
                        <img src="${furniture.imageUrl}" width="150" height="150" alt="Ours en peluche">
                        <p>${furniture.description}</p>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle mb-2" type="button" id="dropdownCustomization" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Vernis
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownCustomization">
                                <a class="dropdown-item" href="#">Bleu</a>
                                <a class="dropdown-item" href="#">Rouge</a>
                                <a class="dropdown-item" href="#">Vert</a>
                            </div>
                        </div>
                        <a href="#" class="btn btn-secondary" data-id=${furniture.id}>Ajouter au panier</a>
                        <a href="#" class="btn btn-primary">Acheter cet article</a>
                    </div>
                </div>
            </div>
        </div>`
        }
        document.querySelectorAll(".addBasket").forEach(btn-secondary =>{
            btn-secondary.addEventListener("click", function(){
                addBasket(this.dataset.id);
                this.setAttribute("class", "btn-secondary addBasket Activated")
            })
        })
    });