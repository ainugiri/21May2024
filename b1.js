function countClick() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  }
}   

function printHello() {
  console.log('Hello');
}

