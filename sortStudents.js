/*Given an array of students, sort first by graduated then by grade.
Each object in the students array will have properties id, graduated and grade. 
*/

function sortStudents(students) {
    return students.sort( (a,b) => {
    if(a.graduated && !b.graduated){
        return -1;
    }
    if(b.graduated && !a.graduated){
            return 1;
    }
        if ((a.graduated === b.graduated)){
            if (a.grade > b.grade) {
                return -1;
            }
            if (b.grade > a.grade) {
                return 1;
            };
        }

    });

    
}

module.exports = sortStudents;