const areas = require("./areas");

//Quadrado
test("Teste quadrado ok", () => {
  expect(areas.areaQuadradoRetangulo(2, 4)).toBe(8);
});

test("Teste quadrado base igual a zero", () => {
  expect(() => areas.areaQuadradoRetangulo(0, 4)).toThrow(
    "Os dois valores devem ser maior que zero"
  );
});

test("Teste quadrado altura igual a zero", () => {
  expect(() => areas.areaQuadradoRetangulo(0, 4)).toThrow(
    "Os dois valores devem ser maior que zero"
  );
});

//Retangulo
test("Teste retangulo ok", () => {
  expect(areas.areaQuadradoRetangulo(2, 4)).toBe(8);
});

test("Teste retangulo base igual a zero", () => {
  expect(() => areas.areaQuadradoRetangulo(0, 4)).toThrow(
    "Os dois valores devem ser maior que zero"
  );
});

test("Teste retangulo altura igual a zero", () => {
  expect(() => areas.areaQuadradoRetangulo(0, 4)).toThrow(
    "Os dois valores devem ser maior que zero"
  );
});

//Triangulo
test("Teste triângulo ok", () => {
  expect(areas.areaTriangulo(2, 4)).toBe(4);
});

test("Teste triângulo base igual a zero", () => {
  expect(() => areas.areaTriangulo(0, 4)).toThrow(
    "Os dois valores devem ser maior que zero"
  );
});

test("Teste triângulo altura igual a zero", () => {
  expect(() => areas.areaTriangulo(0, 4)).toThrow(
    "Os dois valores devem ser maior que zero"
  );
});

//Circulo
test("Teste circulo ok", () => {
  expect(areas.areaCirculo(2)).toBeCloseTo(12.5);
});

test("Teste circulo com raio igual a zero", () => {
  expect(() => areas.areaCirculo(0)).toThrow("O raio deve ser maior que zero");
});
