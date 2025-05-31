export async function getCard(){
    const response = await fetch(
    `https://dummyjson.com/carts?limit=10`
  );
  const data = await response.json();
  return data;

}