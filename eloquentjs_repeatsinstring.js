function countBs(string) {
  var i = string.length;
  var finalCount = 0;

  for (var counter = 0; counter < i; counter++ )
  if (string.charAt(counter) == "B") {
  finalCount += 1;
  }

  return finalCount;
}

function countChars(string, c) {
  var lower = string.toLowerCase();
  var i = string.length;
  var finalCount = 0;

  for (var counter = 0; counter < i; counter++ )
  if (lower.charAt(counter) == c) {
  finalCount += 1;
  }

  return finalCount;
}
