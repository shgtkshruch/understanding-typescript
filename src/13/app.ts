(() => {
  function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2;
    if (showResult) {
      console.log(phrase + result);
    } else {
      return result;
    }
  }

  // let number1 = 5;
  // Type 'string' is not assignable to type 'number'
  // number1 = 'Hello';

  // let number1;
  // number1 = 'Hello';

  // Type 'string' is not assignable to type 'number'.ts(2322)
  // let number1: number;
  // number1 = 'Hello';

  const number1 = 5;
  const number2 = 2.8;
  const printResult = true;
  const resultPhrase = 'Result: ';

  add(number1, number2, printResult, resultPhrase);
})();
