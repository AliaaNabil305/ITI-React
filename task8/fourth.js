function onlyTwoParams(param1, param2) {
  if (arguments.length !== 2) {
      throw new Error('The function onlyTwoParams requires exactly 2 parameters.');
  }

  return 'Function executed successfully with 2 parameters.';
}
try {
  console.log(onlyTwoParams(1, 2)); 
} catch (error) {
  console.error(error.message);
}

try {
  console.log(onlyTwoParams(1));     
} catch (error) {
  console.error(error.message);
}

try {
  console.log(onlyTwoParams(1, 2, 3)); 
} catch (error) {
  console.error(error.message);
}
