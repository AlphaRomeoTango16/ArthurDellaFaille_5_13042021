fetch("http://localhost:3000/api/furniture")
    .then(data => data.json())
    .then( jsonListArticle => {
        for(let jsonArticle of jsonListArticle){
            let article = new Article(jsonArticle);
            document.querySelector("#main_content").innerHTML += `<div class="row mb-3">
                                                                    <div class="col-10 m-auto">
                                                                        <div class="card shadow">
                                                                                <div class="card-header">
                                                                                    <h5 class="card-title">${article.name}</h5>
                                                                                </div>
                                                                                <img src="${article.imageUrl}" class="card-img-top">
                                                                                <div class="card-body">
                                                                                    <p>${article.price}</p>
                                                                                </div>
                                                                                <a href="../products/product_1.html" class="btn btn-primary stretched-link">Sélectionner article</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>`
        }
    });