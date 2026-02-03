const student = {
  name: "Tom",
  grades: {
    math: 90,
    science: 85
  }
};

function printGrades({ name, grades: { math, science } }) {
  console.log(`name : ${name} math : ${math} science : ${science}`);
}

printGrades(student);