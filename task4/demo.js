/*
function isPalindrome(str) {
    var left = 0;
    var right = str.length - 1;
    
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function main() {
    var word = prompt("Enter a string:");
    var option = prompt("Do you want to consider case? (y/n):");

    var reversed = option === 'n' ? word.toLowerCase() : word;

    if (isPalindrome(reversed)) {
        document.write("The entered string is a palindrome.");
    } else {
        document.write("The entered string is not a palindrome.");
    }
}

main()*/

/*

var word=prompt("Enter your message")
function counte(x) {
    var count = 0;
    for (i = 0; i < x.length; i++) {
      if (x[i] === 'e') {
        count++;
      }
    }
    document.write("Number of e is "+count)
  }
  
 counte(word)*/


var num=prompt("Enter the number")
 function oddoreven(x){
    if(x%2==0){
        document.write("Number is even")
    }
    else{
        document.write("Number is odd")

    }
 }

 oddoreven(num)
  
