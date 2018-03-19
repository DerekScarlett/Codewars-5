//Write a reverseWords function that accepts a string a parameter, and reverses each word in the string. Any spaces in the string should be retained.
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
