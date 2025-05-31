import { getCard } from "./api.js";
import { addLoader, createCard, removeLoader } from "./domCards.js";

async function card() {

    try {
      addLoader()
        const {carts} = await getCard();

        // const products = carts?.[0]?.products || [];

        console.log(carts);
        createCard(carts);
        
    }catch (err) {
    console.log("error happened", err);
  } finally {
      removeLoader();
    }
    
}
document.addEventListener("DOMContentLoaded", card);
// card()