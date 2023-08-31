function* fibGeneratorByCount(count) {
    var current = 0;
    var next = 1;
    for (let i = 0; i < count; i++) {
      yield current;
      [current, next] = [next, current + next];
    }
  }
  
  function* fibGeneratorByMaxValue(maxValue) {
    var current = 0;
    var next = 1;
    while (current <= maxValue) {
      yield current;
      [current, next] = [next, current + next];
    }
  }
  
  var count = 10;
  var maxValue = 100;
  
  var fibNumByCount = [...fibGeneratorByCount(count)].join(', ');
  console.log(fibNumByCount);
  
  var fibNumByMaxValue = [...fibGeneratorByMaxValue(maxValue)].join(', ');
  console.log(fibNumByMaxValue);
  