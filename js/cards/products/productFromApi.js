import { getCard } from "../api.js";
import { addLoader, removeLoader } from "../domCards.js";
import { createProduct } from "./domProducts.js";

const params = new URLSearchParams(window.location.search);
const cartId = Number(params.get("id"));

async function product() {
  try {
    addLoader()
    const { carts } = await getCard();

    const cart = carts.find((cart) => cart.id === cartId);

    const products = cart?.products || [];

    console.log(products);
    createProduct(products);
  } catch (err) {
    console.log("error happened", err);
  }finally {
      removeLoader();
    }
}
product();
