/*


If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/

function multiples(n){

  function total(div, amount){
    var summy = 0;
    for (var x = 0; x <= amount; x++ ){
      summy += div * x
    }
    return summy;
  }


  limit = n - 1
  three = limit / 3
  five = limit / 5
  fifteen = limit / 15
  return total(3, three) + total(5, five) - total(15, fifteen)
}

console.log(multiples(100))
