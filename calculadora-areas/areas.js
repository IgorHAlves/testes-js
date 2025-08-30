function areaQuadradoRetangulo(base, altura) {
  if (base <= 0 || altura <= 0) {
    throw new Error("Os dois valores devem ser maior que zero");
  }
  return base * altura;
}

function areaTriangulo(base, altura) {
  if (base <= 0 || altura <= 0)
    throw new Error("Os dois valores devem ser maior que zero");
  return (base * altura) / 2;
}

function areaCirculo(raio) {
  if (raio <= 0) throw new Error("O raio deve ser maior que zero");
  return 3.14 * (raio * raio);
}

module.exports = { areaQuadradoRetangulo, areaTriangulo, areaCirculo };
