const calculadora = require("../models/calculadora");

test("Teste somando", () => {
  const resultado = calculadora.somar("pasocar", 2);
  console.log(resultado);
  expect(resultado).toBe("error");
});
