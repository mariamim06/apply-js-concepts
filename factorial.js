/* multiline comment
3! = 3 X 2 X 1
4! = 4 X 3 X 2 X 1 
7! = 
*/

var factorial = 1;
for(var i = 1; i <=7; i++) {
    console.log(i);
    factorial = factorial * i;
}
console.log('factorial total:', factorial);