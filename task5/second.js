var arr = [];
for (var i = 0; i < 5; i++) {
    var value = parseInt(prompt("Enter 5 values"));
    arr.push(value);
}
console.log("%cyou have entered:","color:red", arr);

function Sorted(a,b){
    return a-b;
}

arr.sort(Sorted)
console.log("%cSorted array in ascending:","color:red", arr);
console.log("%cSorted array in descending:","color:red", arr.reverse());
/*

var radius = parseInt(prompt("What is the value of circle radius"));
var area=Math.PI*radius*radius;
alert("the total area of the circle is "+area)



var value = parseInt(prompt("What is the value you want to calculate it's square root"));
var root=Math.sqrt(value)
alert("the square root of "+ value + " is " + root)



var angle = parseInt(prompt("What is the angle in degrees you want to calculate its cosine"));
var cosine = Math.cos((angle * Math.PI) / 180);
alert("cos " + angle + " is " + cosine.toFixed(4)); */




