const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

//--------------------ojo aca empezamos a probar divide y multiply--------------------
// Tarea 1
// pruebas para dividir.
test('divide 10 / 2 para que de 5', function() {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('divide 15 / 3 para que de 5', function() {
  expect(calculator.divide(15, 3)).toBe(5);
});

// test para dividir por cero (la Ñapa)
test('dividir por cero debe lanzar error', function() {
  expect(function() { calculator.divide(10, 0); }).toThrow('Division by zero is not allowed'); //pilas tiene que ser en el mismo idioma que el mensaje de error
});


// tests para multiplicar
test('multiplicar 3 * 4 para que de 12', function() {
  expect(calculator.multiply(3, 4)).toBe(12);
});

test('multiplicar -2 * 6 para que de -12', function() {
  expect(calculator.multiply(-2, 6)).toBe(-12);
});