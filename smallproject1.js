var getNumbers = function() {
  var randomDraw = [];
  var x;
  var y;

function compareMe(num1, num2) {
  return num1 - num2;
}

  var getX = function() {
    x = Math.ceil(Math.random() * 75);

    return x;
  };

  var getY = function() {
    y = Math.ceil(Math.random() * 15);

    return y;
  };

  for (var i = 1; i <= 5; i++) {
    getX();
    if (randomDraw.indexOf(x) !== -1) {
      getX();
    }
    randomDraw.push(x);
  }

randomDraw.sort(compareMe);

  getY();
  randomDraw.push(y);

  console.log(randomDraw.toString());
};
