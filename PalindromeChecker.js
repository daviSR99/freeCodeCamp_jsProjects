function palindrome(str) {
  
 let newString =str.toLowerCase().replace(/[^a-z\d]/g,'');
console.log(newString);


return newString.split('').reverse().join('') === newString;
}

palindrome("eye");