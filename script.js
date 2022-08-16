const list = [];
const anotherList = list.concat(157);

console.log(anotherList);

const persona = {
  name: "Jazmin",
  twitter: "@MaJazminaFel",
  age: 45,
  isDeveloper: true,
  links: ["https://serambiental.info", "https://treeeco.com.ar"],
};

const field = "twitter";

console.log(persona.name);
console.log(persona.links[1]);

console.log(persona[field]);

//function expretion
const sumar = (ope1, ope2) => {
  console.log(ope1);
  console.log(ope2);
  return ope1 + ope2;
};

console.log(sumar(2, 3));

const op1 = 8;
const op2 = 9;

console.log(sumar(op1, op2));

//declaration
function restar(a, b) {
  return a - b;
}

console.log(restar(op1, op2));
