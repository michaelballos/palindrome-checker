const palindromeChecker = (input: string): boolean => {
  const originalString = input.replace(/[^a-zA-Z0-9]/ig, '').toLowerCase().trim();
  const palindrome = originalString.split('').reverse().join('').toLowerCase();
  if (originalString === palindrome) {
    console.log(`${input}: True`);
    return true;
  } else {
    console.log(`${input}: False`);
    return false;
  }
};

palindromeChecker('eye');
palindromeChecker('eye');
palindromeChecker('_eye');
palindromeChecker('race car');
palindromeChecker('not a palindrome');
palindromeChecker('A man, a plan, a canal. Panama');
palindromeChecker("never odd or even")
palindromeChecker("nope")
palindromeChecker("almostomla")
palindromeChecker('My age is 0, 0 si ega ym.')
palindromeChecker('1 eye for of 1 eye.')
palindromeChecker('0_0 (: /-\ :) 0-0')
palindromeChecker('five|\_/|four')