import Score from './score'

function Student({studentData}){
    return (
        <div id='studentDiv'>
            <h1>Student Names:</h1>
            {studentData.students.map((student) => {
                return(
                <div id='studentNameDiv'>
                    <p id='studentMame'>
                        Student name: {student.name} 
                    </p>
                </div>
                )
            })}
            <h1>Student Bios:</h1>
             {studentData.students.map((student) => {
                return(
                <div id='studentBioDiv'>
                    <p id='studentBio'>
                    {student.name}'s Bio: {student.bio} 
                    </p>
                </div>
                )
            })}
            <Score studentData={studentData}/>
        </div>
      )
}
export default Student;