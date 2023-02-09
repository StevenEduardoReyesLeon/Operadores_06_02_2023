
// Math.ceil(x)
// Devuelve el entero más pequeño mayor o igual que un número.
numvalor = 6.6;
nuevovalor = (Math.ceil(numvalor));
console.log(`El valor mayor siguiente de ${numvalor} es ${nuevovalor}`);

// Math.floor(x)
// Devuelve el mayor entero menor que o igual a un número.
nuevovalor = (Math.floor(numvalor));
console.log(`El valor cercado de ${numvalor} es ${nuevovalor}`);

// Math.max()
// Devuelve el mayor de cero o más números.
valor1 = 6;
valor2 = 7;
valor3 = 4;
nuevovalor = (Math.max(valor1, valor2, valor3));
console.log(`El valor mayor de ${valor1}, ${valor2}, ${valor3} es ${nuevovalor}`);

// Math.min()
// Devuelve el más pequeño de cero o más números.
valor1 = 6;
valor2 = 7;
valor3 = 4;
nuevovalor = (Math.min(valor1, valor2, valor3));
console.log(`El valor menor de ${valor1}, ${valor2}, ${valor3} es ${nuevovalor}`);

// Math.pow(x, y)
// Las devoluciones de base a la potencia de exponente, que es, baseexponent.
nuevovalor = (Math.pow(valor1, valor3));
console.log(`Elevar ${valor1} a ${valor3} es ${nuevovalor}`);

// Math.random()
// Devuelve un número pseudo-aleatorio entre 0 y 1.
function getRamdonInt() {return Math.floor(math.random()*4)}
console.log(Math.random()*4);

// Math.round(x)
// Devuelve el valor de un número redondeado al número entero más cercano.
nuevovalor = (Math.round(numvalor));
console.log(`El valor redondo de ${numvalor} es ${nuevovalor}`);

// Math.sqrt(x)
// Devuelve la raíz cuadrada positiva de un número.
num4 = 7;
num5 = 8;
num6 = 5;
function calcHypotenuse(num4, num5) 
{return (Math.sqrt(num4*num4));}
console.log(calcHypotenuse(num4));

// Math.trunc(x)
// Devuelve la parte entera del número x, la eliminación de los dígitos fraccionarios.
nuevovalor = (Math.trunc(numvalor));
console.log(`El numero entero de ${numvalor} es ${nuevovalor}`);

// 6.265456.toFixed(x);
// Devuelve la cantidad de números decimales según el valor de x //
let numerotoFix = 6.265456
resultado = numerotoFix.toFixed(4)
console.log(`${resultado}`);
