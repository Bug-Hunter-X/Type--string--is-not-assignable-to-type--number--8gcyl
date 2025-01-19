function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;

  if (isNaN(numA) || isNaN(numB)) {
    return 0; // Or handle the error appropriately
  }
  return numA + numB;
}

let result1 = add(5, 10); // Correct usage
let result2 = addSafe(5, '10'); // Safe usage, handles string input
let result3 = addSafe('5', '10'); // Safe usage, handles string input
let result4 = addSafe('hello', 10); //Safe usage, handles string input that cannot be converted to a number