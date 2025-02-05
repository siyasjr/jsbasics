/*Find students whose score is at least 90.

const students = [
    { name: 'David', grade: 90 }, 
    { name: 'Daisy', grade: 100 },
    { name: 'Darcie', grade: 80 }
];

const a = topStudents(students);

console.log(a); 
/*
*  [
*    { name: 'David', grade: 90 }, 
*    { name: 'Daisy', grade: 100 }
*  ]
*/
*/

function topStudents(students) {
    const ts = students.filter(function(el){
        return (el.grade >= 90);
    });
    return ts;
}
module.exports = topStudents;
