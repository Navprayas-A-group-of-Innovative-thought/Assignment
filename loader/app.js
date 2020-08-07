const logo = document.querySelectorAll("#logo path");
console.log(logo);

for (let i = 0; i < logo.length; i++) {
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

console.log(document.getElementById("Vector_2").getTotalLength());

const blue = document.querySelectorAll("#blue path");
console.log(blue);

const green = document.querySelectorAll("#green path");
console.log(green);

for (let i = 0; i < blue.length; i++) {
  blue[i].style.animation = `appear ${i + 1}s ease `;
  green[i].style.animation = `appear ${i + 2}s ease `;
}
