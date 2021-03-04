
/* 
    Rising Square
    Given a number return an array filled with the
    squares of integers up to given number
*/
function risingSqaures(num, arr = []){

}
// EX. 3 => [1,4,9]
// EX. 5 => [1,4,9,16,25]
function risingSqauresNoArr(num){
  if (num==1){
    return [1]
  }
  var arr=risingSqauresNoArr(num-1)
  arr.push(num**2)
  return arr
}

console.log(risingSqaures(5)) // [1,4,9,16,25]
