import Score from './score'

function Student({name, bio, scores}){
    return (
        <div id='studentDiv'>
            <h1>Student Names: {name} </h1>
            <h1>Student Bios: {bio} </h1>
            {scores.map(element => <Score date={element.date} score={element.score} />)}
        </div>
      )
}
export default Student;