function Score({studentData}){
    return (
        <div id='scoresdiv'>
            <h1>Student Score Dates:</h1>
            {studentData.students.map((student, index) => {
                console.log(student.scores[index].date)
                return(
                <div id='scoresDateDiv'>
                    <p id='scoresDate'>
                        {student.name}'s Score Date: {student.scores[index].date}
                    </p>
                </div>
                )
            })}

            <h1>Student Scores:</h1>
             {studentData.students.map((student, index) => {
                console.log(student.scores[index].date)
                return(
                <div id='scoresScoreDiv'>
                    <p id='scoresScore'> 
                        {student.name}'s Score: {student.scores[index].score} 
                    </p>
                </div>
                )
            })}
        </div>
      )
}
export default Score;