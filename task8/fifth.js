function addNumbers(...numbers) {
    if (numbers.length === 0) {
        throw new Error('Please provide at least one number.');
    }

    let sum = 0;
    for (const num of numbers) {
        if (typeof num !== 'number' || isNaN(num)) {
            throw new Error('Invalid parameter. Only numbers are allowed.');
        }
        sum += num;
    }

    return sum;
}

try {
    console.log(addNumbers(1, 2, 3));
    console.log(addNumbers(5, "hi", 7)); 
} catch (error) {
    console.error(error.message);
}

try {
    console.log(addNumbers()); 
} catch (error) {
    console.error(error.message);
}
