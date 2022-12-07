const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const list = document.querySelector("#ingredients");

ingredients.forEach((el) => {
  const listItem = document.createElement("li");
  const itemNode = document.createTextNode(el);
  listItem.appendChild(itemNode);
  list.appendChild(listItem);
  listItem.classList.add("item");
});
