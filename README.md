# Codewars-5

Problem: Write a reverseWords function that accepts a string a parameter, and reverses each word in the string. Any spaces in the string should be retained.

Solution:
function reverseWords(str){
  var splitWords = str.split(" ");
  var newArray = splitWords.map(function(word){
    let newStr = '';
    for(var i = word.length-1; i >= 0; i--) {
      newStr += word[i];
    }
    return newStr
  })
  return newArray.join(' ');
}

Explained:
So what I did here for this problem I made my function reverseWards that takes in a parameter str. Then I made a variable named splitWords and assigned it the value of str.split(" ") (.splic is a javascript method that splits our string). Then I made a new variable name newArray and assigned it that makes an array of my new split strings. After I use a for loop to that goes through and reverse all my string and I return that value as variable newStr. Then finally I join my split string back together. For example if you used string "zebra" this function would return "arbez"
