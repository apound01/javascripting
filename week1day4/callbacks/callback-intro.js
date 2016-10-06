// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
//  for (var i = 0; i < arr.length; i++) {
  arr.forEach(function(current){
    if (current == "Waldo") {
      found(arr.indexOf(current) + 1);   // execute callback
    }
  });
}



function actionWhenFound(index) {
  console.log("Found Waldo at Index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
