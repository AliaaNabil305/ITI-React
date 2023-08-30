/* function generateCourseInfo(
    { courseName = "ES6", courseDuration = "3 days", courseOwner = "JavaScript", ...extraProps }) {
    if (Object.keys(extraProps).length > 0) {
      throw new Error("Invalid properties detected.");
    }
  
    console.log("Course Name:", courseName);
    console.log("Course Duration:", courseDuration);
    console.log("Course Owner:", courseOwner);
  }
  
  try {
    generateCourseInfo({
      courseName: "Web Development",
      courseDuration: "2 weeks",
      courseOwner: "udacity",
      extraProperty: "This should throw an exception"
    });
  } catch (error) {
    console.error(error.message);
  }
  
  console.log("\n");
  
  generateCourseInfo({
    courseName: "React"
  }); */
var Iterable = {
  namess: {
    name1: 'aliaa',
    name2: 'nabil',
    name3: 'mahmoud'
  },
  [Symbol.iterator]() {
    const namess = Object.entries(this.namess);
    let index = 0;

    return {
      next: () => {
        if (index < namess.length) {
          const [key, value] = namess[index];
          index++;
          return { value: { key, value }, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};


for (var { key, value } of Iterable) {
  console.log(`key: ${key}, Value: ${value}`);
}

  
  