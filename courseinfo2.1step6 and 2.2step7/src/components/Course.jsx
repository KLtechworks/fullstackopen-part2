const Header = ({name}) => {
    return <h1>{name}</h1>
}

const Part = ({name, exercises}) => {
    return (
        <p>
            {name} {exercises}
        </p>
    )
}

// 2.2: Course information step 7
const Total = ({parts}) => {
    let sum = 0
    for (let part of parts){
        sum = sum + part.exercises
    }
    return <p><b>total of {sum} exercises</b></p>
}

const Content = ({parts}) => { 
    return (
        <div>
            {parts.map(part => (
                <Part key={part.id} name={part.name} exercises={part.exercises} />
            ))}           
        </div>
    ) 
}


// 2.2: Course information step 7 as <Total />
const Course = ({course}) => {
  return (
    <div>
        <Header name={course.name} />
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>       
    </div>
    
  )
}

export default Course