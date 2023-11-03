//Arrays: Escreva um programa que declare um array de suas frutas favoritas e imprima cada fruta na lista usando um loop.

let frutas= ["maça","banana","melancia","uva","tanja"]

for (const index in frutas) {
    console.log(`${index} :${frutas[index]}`);
  }
