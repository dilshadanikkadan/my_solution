const students = [
    { name: "John", grades: [70, 80, 90] },
    { name: "Jane", grades: [60, 65, 70] },
    { name: "Jim", grades: [85, 90, 95] },
    { name: "Jill", grades: [50, 55, 60] },
  ];
  //find out the student name whose average grade is greater than 75
  
Array.prototype.sum = function(){
     let sum =0;
     for (let i = 0; i < this.length; i++) {
         sum += this[i]
     }
     return sum
}

function findAvg(list){
    for (let i = 0; i < list.length; i++) {
        const student = list[i];
        const gradeTotal = student.grades.sum();
        const isAvg = gradeTotal /3
       
    }
}
findAvg(students)