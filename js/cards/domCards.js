export function createCard(carts) {
  const container = document.querySelector(".container");

  carts.forEach((cart) => {
    container.innerHTML += `
    <div class="row m-3">
        <div id="serviceList" class="list ">
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">Cart: ${cart.id}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">
                Total: ${cart.total}
              </h6>
              <p class="card-text">DiscountTotal: ${cart.discountedTotal}$</p>
              <p class="card-text">Products: ${cart.products.length}</p>
              <a class="btn btn-info" href="./product.html?id=${cart.id}">Link</a>
            </div>
          </div>
        </div>
      </div>
`;
  });
}
export const addLoader = () => {
  const container = document.querySelector(".container");
  const loaderDiv = document.createElement("div");
  loaderDiv.classList.add(
    "d-flex",
    "flex-column",
    "justify-content-center",
    "align-items-center",
    "position-fixed",
    "top-0",
    "start-0",
    "w-100",
    "h-100",
    "bg-white", // ose bg-dark për errësim
    "fs-3",
    "loader"
  );
  loaderDiv.innerText = "Loading...";
  container.append(loaderDiv);
};

export const removeLoader = () => {
  const loader = document.querySelector(".loader");
  loader.remove();
};
