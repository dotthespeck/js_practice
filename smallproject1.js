var getNumbers = function() {
  var randomDraw = [];
  var x;
  var y;

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
    randomDraw.push(x);
  }

  getY();
  randomDraw.push(y);

  console.log(randomDraw.toString());
};
