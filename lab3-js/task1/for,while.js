let i = 3;

while (i) {
  alert( i-- );
}

//the answer is 1,because
// Every loop iteration decreases i by 1. 
//The check while(i) stops the loop when i = 0.

let i = 0;
while (++i < 5) alert( i );

let i = 0;
while (i++ < 5) alert( i );

//Both loops alert the same values, or not?

//From 1 to 4

/*The first value is i = 1,because ++i first 
increments i and then returns the new value.

From 1 to 5
The first value is again i = 1.The postfix form of i++ increments i and then returns the old value


*/

/* For each loop write down which values it is going to show. 
Then compare with the answer.
Both loops alert same values or not?

The answer: from 0 to 4 in both cases.

*/

//Use the for loop to output even numbers from 2 to 10.

for(int i = 2; i < 10; ++i){
  if(i % 2 == 0){
    alert(i);
  }
}

//Output prime numbers

let n = 10;

nextPrime;
for(let i = 2; i < n; ++i){
  for(let j = 2; j < i; j++){
    if(i % j == 0) continue nextPrime;
  }

  alert(i);
}