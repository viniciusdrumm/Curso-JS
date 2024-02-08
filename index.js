function checkMultiplos(num1, num2) {
    // Verificar se algum dos números é 0, pois a divisão por 0 é indefinida.
    if (num1 === 0 || num2 === 0) {
      console.log("Um dos números é 0, não é possível determinar a multiplicidade.");
      return;
    }
  
    if (num1 % num2 === 0 || num2 % num1 === 0) {
      console.log("Os números são múltiplos.");
    } else {
      console.log("Os números não são múltiplos.");
    }
  }
  
  // Exemplo Usado:
  checkMultiplos(12, 3);
  checkMultiplos(5, 17);
  checkMultiplos(29, 15);
  checkMultiplos(0, 5);