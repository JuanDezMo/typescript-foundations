console.log(`Definiendo Funciones`);

// Funcion tradicional
function addNumbers(firstValue: number, secondValue: number) : number {
    return firstValue + secondValue;
}

// Arrow Function
const addNumberArrow = (num1: number, num2: number) : number => { 
    return num1 + num2;
}

const result = addNumbers(10, 5);
console.log(`Result: ${result}`);
console.log({ result });

console.log(`2. Add Number Arrow Function: ${addNumberArrow(5, 8)}`);

// Funcion con secondNumber como opcional y base con valor por defecto
function multiply( firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

/*
const multiplyOne: number = multiply(12, 10);

const multiplyTwo: number = multiply(12);

const multiplyThree: number = multiply(12, base = 10);

console.log(`MultiplyOne Result: ${multiplyOne}`);
console.log(`MultiplyTwo Result: ${multiplyTwo}`); */