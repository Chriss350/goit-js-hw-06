const cat = document.querySelectorAll(".item");

console.log("Number of categories: " + cat.length);

cat.forEach((el) => {
  const catName = el.querySelector("h2").innerHTML;
  const catLenght = el.querySelectorAll("li");
  console.log("\nCategory: " + catName);
  console.log("Elements: " + catLenght.length);
});
