export function createProduct(products) {
  const container = document.querySelector(".container");

  products.forEach((product) => {
    container.innerHTML += `
     <div class="card" style="width: 18rem">
        <img src="${product.thumbnail}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Name:${product.title}</h5>
          <p class="card-text">
          Price: ${product.price}$ & Quantity: ${product.quantity}
          </p>
        </div>
      </div>
`;
  });
}


