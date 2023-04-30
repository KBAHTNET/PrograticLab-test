//@ts-check
'use strict';

/**
 * Ищет комбинацию строки, где ее математический результат будет равен ожидаемому значению.
 * @param {number} expectVal ожидаемое значение
 * @param {string|null} expectStr ожидаемая часть строки (например для получения результата существует несколько комбинаций, но необходимо, чтобы строка содержала (3+2) или (3-2)))
 * @returns {Array<string>} массив комбинций, удовлетворяющих условию
 */
export function genCombination(expectVal, expectStr = '') {
  const digits = [];
  for (let i = 9; i != 0; i--) {
    digits.push(i);
  }

  const ops = ['+', '-', ''];

  const mayCombos = [];
  
  //O(ops^digits = 3^9)
  const operations = Math.pow(ops.length, digits.length);
  for (let i = 0; i < operations; i++) {
    let arr = [];
    let str = '';
    let temp = i;
    for (let j = 0; j < digits.length; j++) {
      const mathSymbol = ops[temp % ops.length];
      arr.push(mathSymbol); // выбираем соответствующий элемент массива
      temp = Math.floor(temp / ops.length); // переходим к следующему символу
      str += mathSymbol + digits[j]
    }
    const res = eval(str)
    if (res === expectVal) {
      if (!expectStr || str.includes(expectStr)) {
        if (parseInt(str[0]) === 9 || str[0] === '-') {
          mayCombos.push(`${str}=${expectVal}`);
        }
      }
    }
  }

  return mayCombos;
}